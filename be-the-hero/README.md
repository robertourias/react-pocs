# semanaomnistack11
A Semana OmniStack é um conteúdo para quem já domina os fundamentos do desenvolvimento web. Por isso, em paralelo com a Semana OmniStack estamos disponibilizando um conteúdo exclusivo pra quem está começando do zero ou ainda não domina HTML/CSS/JavaScript nem tem uma base de SQL. Se você teve dificuldades em acompanhar a Semana OmniStack, esse é um sinal de que esse workshop é pra você😉

Professor: Diego Fernandes

## Conhecendo a OmniStack:

- Apresenar aplicação
- Configurar ambiente de dev
	- Node & NPM
	- VSCode
- Back e front-end
- Criar projeto com Node
- Entender React e SPA
- Criar projeto com ReactJS
	- npx create-react-app frontend
	- Utilizando npx: A diferença é que o NPX não baixa, apenas executa um pacote
- Entender sobre Reactive Native & Expo


## Segundo dia:

- Node.js & Express
	- Rotas e recursos
	- Métodos HTTP
	- Tipos de parametros
- Configurando Nodemon
- Utilizando Insomnia
- Diferenças entre bancos de dados
- Configuração do Banco de dados
	- http://knexjs.org/
- Pensando nas entidades e funcionalidades:
	- Entidades:
		- ONG
		- Caso (incident)
	- Funcionalidades:
		- Login da ONG
		- Logout da ONG
		- Cadastro da ONG
		- Cadastro de novos casos
		- Deletar casos
		- Listar casos especificos de uma ONG
		- Listar todos os casos
		- Entrar em contato com a ONG
	- Comandos:
		- npx knex migrate:make create_ongs
		- npx knex migrate:latest
		- 
- Construção do Back-end
- Adicionando módulo CORS
- Enviando back-end ao github


## Terceiro Dia:

- Limpando estrutura
- Conceitos do React
	- Componente
	- JSX
	- Propriedades
	- Estado
	- Imutabilidade
- Página do Login
- Configuração de rotas
- Cadastro de ONGs
- Listagem de casos
- Cadastro de um novo caso
- Conectando aplicação a API:
	- axios
- Enviar projeto ao github


## Quarto dia:

- Intalando Expo
- Criando projeto React Native
- Executando projeto
	- No celular
	- emuladores
	- Expo snack
- Diferenças para o ReactJS
	- Elementos HTML
	- Semântica
	- Estilização
		- Flexbox
		- Propriedades
		- Herança de estilos
		- Estilização própria
- Estrutura de pastas
- Ícone e Splash Screen
- Configurando navegação
	- https://docs.expo.io/versions/latest/guides/routing-and-navigation/
	- https://reactnavigation.org/docs/getting-started
- Página de casos
- Detalhe do caso
- Abrindo whatsapp & E-mail
	- https://docs.expo.io/versions/latest/sdk/mail-composer/
- Conexão com a API
	- Utilizando axios
	- Intl para conversão moeda
- Enviando projeto ao GitHub


## Funcionalidades Avançadas:

- Adicionando validação
	- https://github.com/arb/celebrate
- Adicionando testes
	- Porque fazer testes?
	- TDD (test-driven development)
	- Configurando JEST
	- Tipos de testes
	- Configurando banco de testes
		- Instalar cross-env
		- package.json: 
```
                "test": "cross-env NODE_ENV=test jest"
```
   - Instalando supertest
	 - Testando rota de autenticação
- Deploy
	- Alternativas
		- (Back-end) https://www.heroku.com/
		- (Back-end) https://www.digitalocean.com/
		- (Front-end) https://www.netlify.com/
	- Qual escolher?
- Estudos daqui pra frente
	- Padrões de código, ESLisnt, Prettier
	- Autenticação JWT
	- Styled Components
- Dicas para aproveitar melhor
	- Github
	- Linkedin
