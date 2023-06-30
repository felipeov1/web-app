const express = require('express');
const fs = require('fs');
const bodyparser = require('body-parser')

const routes = express.Router();

routes.use(bodyparser.urlencoded({extended:true}))


const readFile = () =>{
    const data = fs.readFileSync('./routes/db/products.json', 'utf-8');
    return JSON.parse(data);
};

routes.get('/home', (req, res) =>{
    res.render('home')
})

routes.get('/product', (req, res) =>{
    const data = readFile()
    res.render('product', {data})
})

routes.get('/product/id/:id', (req, res) =>{
    const data = readFile()
    const idProduct = req.params.id;
    for(let i = 0; i < data.length; i++){
    if(data[i].id == idProduct ){
        const search = [{id: data[i].id, name: data[i].name, color: data[i].color, price: data[i].price}]
        res.render('result', {search})
    } 
}
})

routes.get('/product/name/:name', (req, res) =>{
    const data = readFile()
    const nameProduct = req.params.name;
    for(let i = 0; i < data.length; i++){
        if(data[i].name == nameProduct){
            const search = [{id: data[i].id, name: data[i].name, color: data[i].color, price: data[i].price}]
            res.render('result', {search})
        }
    }
})


module.exports = routes