const express = require('express');
const fs = require('fs');
const path = require('path');
const {v4: uuidv4} = require('uuid');

const app = express();
app.use(express.json());

//create data.json if it doesn't exist

const filepath = path.join(__dirname, 'data.json');

if(!fs.existsSync(filepath)){
    fs.writeFileSync(filepath, JSON.stringify([], null, 2));
}

//read data from file 
function readData(){
    const data = fs.readFileSync(filepath, 'utf-8');
    return JSON.parse(data);
}

//write data into file
function writeData(data){
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2))
}

//GET --items
app.get('/items', (req, res)=> {
    const items = readData();
    res.status(200).json(items);
})

//POST --items
app.post('/items', (req, res)=> {
    const items = readData();
    const newItem = {
        'id' : uuidv4(),
        ...req.body
    };

    items.push(newItem);
    writeData(items);

    res.status(201).json({
        message: "Item created successfully!",
        items: newItem
    });
});

//PUT --item
app.put('/items:id', (req,res)=> {
    const items = readData();

    items
})

app.listen(3030, ()=>{
    console.log('Server Started!');
});