const express = require('express');
const routes = express.Router();

const data = require('./db/products');

routes.get('/home', (req, res) =>{
    res.render('home')
})

routes.get('/product', (req, res) =>{
    res.render('product', {data})
})

routes.get('/product/:id', (req, res) =>{
    const idProduct = req.params.id;
    for(let i = 0; i < data.length; i++){
    if(data[i].id == idProduct){
        const search = [{id: data[i].id, name: data[i].name, color: data[i].color}]
        res.render('result', {search})
    }
}
})


module.exports = routes





