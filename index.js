const express = require('express');
const app = express();
app.get('/', (req, res)=> {
    res.send('Hello, Express!');
});

app.post('/users', (req,res)=> res.status(201).json({created: true}));
//route parameters 
app.put('/users:id', (req,res) => res.json({update}))

app.listen(3000, ()=>{
    console.log('Listening on http://localhost:3000'); 
})


