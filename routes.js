import express from "express";
import sql from "./database.js";
const routes = express.Router()

routes.get('/usuarios', async (req, res)=>{
    const usuarios = await sql`select * from Usuarios`;
    return res.status(200).json(usuarios)
})

routes.post('/usuarios', async (req, res)=>{
    const {email, nome} =  req.body
    await sql`insert into usuarios(nome, email) values(${nome},${email})`
    return res.status(200).json('cadastrado com sucesso!')
})

routes.put('/usuarios/:id', async (req, res)=>{
    const {id} = req.params
    const {nome, email} = req.body
    await sql`update usuarios set nome = ${nome}, 
    email = ${email} where id = ${id}`
    return res.status(200).json('atualizado com sucesso!')
})

routes.delete('/usuarios/:id', async (req, res) =>{
    const {id} = req.params
    await sql`delete from usuarios where id = ${id}`
    return res.status(200).json('excluido com sucesso!')
})


export default routes