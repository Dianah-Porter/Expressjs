const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    res.send("Welcome to get this item!");
})
app.listen('3030', ()=>{
    console.log('Server Started!');
});