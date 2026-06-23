const express = require('express');
const app = express();
app.get('/', (req, res)=> {
    res.send('Hello, Express!');
});

app.post('/users', (req,res)=> res.status(201).json({created: true}));
//route parameters 
app.get('/users:id', (req,res) => res.json({id: req.params.id}))
// GET /search?q=node&page=2 
app.get('/search', (req,res)=> {
    const {q,page = '1'} = req.query;
    res.json({query: q, page: Number(page)});
})

//middleware example

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.listen(3000, ()=>{
    console.log('Listening on http://localhost:3000'); 
})


