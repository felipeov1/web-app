const express = require('express');
const fs = require('fs');
const bodyparser = require('body-parser');

const routes = express.Router();

routes.use(bodyparser.urlencoded({extended:true}))


const readFile = () => {
    const data = fs.readFileSync('./routes/db/products.json', 'utf-8')
    return JSON.parse(data)
}

routes.get('/edit/:id', (req, res) =>{
    const data = readFile
    const nameId = req.params.id
    for(let i = 0; i < data.length; i++){
        if(nameId == data[i].id){
            const result = [{id: data[i].id, name: data[i].name, color: data[i].color, price: data[i].price}]
            res.render('editar', {result})
            break
        }
    }
})

routes.post('/editar', (req, res) =>{
    const data = req.body
    const dataId = data.id
    const dataName = data.name
    const dataColor = data.color
    const dataPrice = data.price

    for(let i = 0; i < data.length; i++){
        if(data[i].id == dataId){
            data[i].id = dataId
            data[i].name = dataName
            data[i].color = dataColor
            data[i].price = dataPrice
        }
    }
    res.redirect('/')
})


module.exports = routes