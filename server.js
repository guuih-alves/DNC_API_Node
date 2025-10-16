import express from 'express'
import cors from 'cors'
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

// Rota utilizada para enviar requisição a API
app.post('/livros', async (req, res) => {
    
   await prisma.user.create({
    data: {

        titulo: req.body.titulo,
        num_paginas: req.body.num_paginas,
        isbn: req.body.isbn,
        editora: req.body.editora
    },

   })
     
    res.status(201).json(req.body)
})

// Rota utilizada para buscar informações da API
app.get('/livros', async(req, res) => {

   const users = await prisma.user.findMany()
    res.status(200).json(users)
})

// Rota utilizada para atualizar dados na API
app.put('/livros/:id', async (req, res) => {

   await prisma.user.update({
    where: {
        id: req.params.id
    },
    data: {
        
        titulo: req.body.titulo,
        num_paginas: req.body.num_paginas,
        isbn: req.body.isbn,
        editora: req.body.editora
    }
   })
    res.status(201).json(req.body)
})  

// Rota utilizada para remover dados da API
app.delete('/livros/:id', async(req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: 'Livro deletado'})
})


app.listen(3000)











         /*

         guilhermeolv05_db_user
         P5aPnhsWz71URU2r


         guialves_db
         RmDdQqWnl49hb4gA

         */
