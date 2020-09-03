import axios from 'axios';

const api = axios.create({baseRUL: 'https://rocketseat-node.herokuapp.com/api'});

export default api;