const express = require('express');

const app =express();

const PORT=3070;
const HOSTNAME ='localhost';



app.get('/',(req,res)=>{
    res.send(`Hello world`)
})

app.get('/about',(req,res)=>{
    res.send(`About Page`)
})
app.get('/contact',(req,res)=>{
    res.send(`Contact Page`)
})

app.listen(PORT,()=>{
    console.log(`App is listen on ${HOSTNAME}:${PORT}`)
})