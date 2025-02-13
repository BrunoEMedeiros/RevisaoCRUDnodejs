import express from "express";
import cors from "cors";
import sql from "./database.js";

const app =  express();
app.use(cors())
app.use(express.json())

app.get('/hello',(req,res)=>{
    return res.status(200).json('Hello World')
})

app.get('/usuarios', async (req, res)=>{
    const usuarios = await sql`select * from Usuarios`;
    return res.status(200).json(usuarios)
})

app.listen(3000,()=>{
    console.log('api no ar!')
})