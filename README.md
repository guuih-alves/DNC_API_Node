rid #176841

*Obs: Tornou-se necessário algumas modificações no documento original do React FrontEnd, o mesmo atualizado segue no endereço abaixo:
https://github.com/guuih-alves/DNC_API_React


-- INSTRUÇÕES BACKEND --

1 - node --watch server.js : Para iniciar servidor no localhost

2- npx prisma studio - Para visualizar dados salvos via API em um banco de dados MongoDB


-- INSTRUÇÕES FRONT END - REACT

1 -npm run dev : Para executar a page do projeto React

-- ROTAS --



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

