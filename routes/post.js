const express =require('express')
const fs = require('fs')
const routes = require('./get')

const router = express.Router()

const readFile = () => {
    const data = fs.readFileSync('./routes/db/products.json')
    return JSON.parse(data)
}

const writeFile = (data) => {
    const updateFile = JSON.stringify(data)
    fs.writeFileSync('./routes/db/products.json', updateFile, 'utf-8')

}

routes.post('/add', (req, res) =>{
    const { id, name, color, price } = req.body
    const currentData = readFile()
    currentData.push({ id, name, color, price })
    writeFile(currentData)
    res.send({ id, name, color, price })      
})


module.exports = routes


