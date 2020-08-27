import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
    async index(request: Request, response: Response) {
        const { city, uf, items } = request.query;
        const parserItems = String(items)
            .split(',')
            .map(item => Number(item.trim()));

        const points = await knex('points')
            .join('points_items', 'points.id', '=', 'points_items.points_id')
            .whereIn('points_items.items_id', parserItems)
            .where('points.city', String(city))
            .where('points.uf', String(uf))
            .distinct()
            .select('points.*')

        return response.json({ points })
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const point = await knex('points').where('id', id).first();

        if(!point) {
            return response.status(400).json({ message: 'Point not found.' });
        }

        const items = await knex('items')
            .join('points_items', 'items.id', '=', 'points_items.items_id')
            .where('points_items.points_id', id)
            .select('items.title');

        return response.json({ point, items })
    }

    async create(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;
    
        // Utilizando para não rodar as querys caso outra falhe
        // Caso a query posterior falhe, ela faz o rollback das anteriores
        const trx = await knex.transaction();

        const point = {
            image: 'https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        };
    
        const insertedIds = await trx('points').insert(point);
    
        const point_id = insertedIds[0];
    
        const pointItems = items.map((item_id: number) =>{
            return {
                items_id: item_id,
                points_id: point_id
            }
        });
    
        await trx('points_items').insert(pointItems);

        await trx.commit();
    
        return response.json({ 
            id: point_id,
            ...point
         });
    }
}

export default PointsController;