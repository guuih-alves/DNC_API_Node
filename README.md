rid #176841

*Obs: Tornou-se necessário algumas modificações no documento original do React, o mesmo atualizado segue no endereço abaixo:
https://github.com/guuih-alves/DNC_API_React

// INSTRUÇÕES

1 - node --watch server.js : Toda vez que houver atualização o servidor ira reiniciar

2- npx prisma init --datasource-provider mongodb --output ../generated/prisma: inicializa um novo projeto Prisma ORM


------ FRONT END - REACT


2 -npm run dev : Para rodar o projeto vite

//ROTAS



// Rota para enviar requisição via API para o banco de dados

app.post('/livros', async (req, res) => {
})   

// Rota para buscar dados via API do banco de dados

app.get('/livros', async(req, res) => {
})

// Rota para atualizar via API dados do banco de dados

app.put('/livros/:id', async (req, res) => {
})  

// Rota para remover via API dados do banco de dados

app.delete('/livros/:id', async(req, res) => {
})


app.listen(3000)

