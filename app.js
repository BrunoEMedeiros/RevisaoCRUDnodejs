import express from "express";
import cors from "cors";
const app =  express();
app.use(cors())
app.use(express.json())

app.get('/hello',(req,res)=>{
    return res.status(200).json('Hello World')
})
app.listen(3000,()=>{
    console.log('api no ar!')
})