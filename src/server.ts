import express from 'express';

const app = express();

app.use(express.json())

const data = [
    'tiago',
    'diego',
    'castro',
    'luan',
    'nina',
    'pedro'
]

app.get('/users', (request, response) =>{
    const search = String(request.query.search)
    const filtredUsers = search ? data.filter(user => user.includes(search)) : data
    return response.json(filtredUsers)
}); 

app.get('/users/:id', (request, response) =>{
    const id = Number(request.params.id);
    const user = data[id]
    return response.json(user)
})

app.post('/users', (request, response) =>{
    const dados = request.body
    const user = {
        nome: dados.nome,
        email: dados.email
    }
    return response.json(user)
   
})



app.listen(3333);
