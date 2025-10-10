import express from 'express'
import cors from 'cors'
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())


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

app.get('/livros', async(req, res) => {

   const users = await prisma.user.findMany()
    res.status(200).json(users)
})


/*
app.get('/livros/:id',async (req, res) => {
    const {id} = req.params;
    const users = await prisma.user.findUnique()
    res.status(200).json(users)
}) */


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