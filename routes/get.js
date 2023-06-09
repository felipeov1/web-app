const express = require('express');
const fs = require('fs');

const routes = express.Router();

// const data = require('./db/products.json')

const data = fs.readFileSync('./routes/db/products.json', 'utf-8');

const readFile = () =>{
    const data = fs.readFileSync('./routes/db/products.json', 'utf-8');
    return JSON.parse(data);
};

routes.get('/home', (req, res) =>{
    res.render('home')
})

routes.get('/product', (req, res) =>{
    const data = readFile()
   // res.render('product', {data})
   res.send(data)
})

routes.get('/product/id/:id', (req, res) =>{
    const idProduct = req.params.id;
    for(let i = 0; i < data.length; i++){
    if(data[i].id == idProduct ){
        const search = [{id: data[i].id, name: data[i].name, color: data[i].color, price: data[i].price}]
        res.render('result', {search})
    } 
}
})

routes.get('/product/name/:name', (req, res) =>{
    const nameProduct = req.params.name;
    for(let i = 0; i < data.length; i++){
        if(data[i].name == nameProduct){
            const search = [{id: data[i].id, name: data[i].name, color: data[i].color, price: data[i].price}]
            res.render('result', {search})
        }
    }
})



module.exports = routes