//Para o express/node entender o TypeScrypt, rodar:
// * npm install @types/express
// * npm install ts-node -D

//Rodar projeto com:
// * npx ts-node 'caminho'
//npx roda os projetos do node

// * npm install ts-node-dev -D
//Alterar o package.json para rodar o projeto com:
//npm run dev

//criar react app no terminal
// npx create-react-app --template=typescript

//* npm install express


// Rotas: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando no sistema

//GET:  Buscar uma ou mais informações do backend
//POST  Criar uma nova informação no backend
//PUT:  Atualziar uma informação existente no backend
//DELETE:   Remover uma informação do backend

//POST http://localhost:3333/users - Criar um usuário
//GET http://localhost:3333/users - Listar usuários
//GET http://localhost:3333/users/5 - Buscar dados do usuário com o ID 5

//Request Params: "/:" Parametros que vem na propria rota que identificam um recurso
//Query Params: "?" Parametros que vem na propria rota geralmente opcionais para filtros, paginação,...
//Request Body: Parametros para criação/atualização de informações

//SELECT * FROM users WHERE name = 'Vinicius'
//knex('users').where('name', 'Vinicius').select('*');

//definir rota
/*const users = [
        'Diego',
        'Vinicius',
        'JackSparrow'
    ];

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');
    const search = String(request.query.search);

    console.log(search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    //Enviar resposta ao acessar o caminho
    //response.send('Hello World');
    //JSON
    return response.json(filteredUsers);
});

//Não esquecer os ":"
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id); //garantir que será mandado um número

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) =>{
    const data = request.body;
    console.log(data);

    const user = {
        name: 'Vinicius',
        email: 'viniciusgandini.goncalves@hotmail.com'
    }

    return response.json(user);
})
*/

//importar express
import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate'
//utilizar o express
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors());

//Definir porta para o servidor
app.listen(3333);