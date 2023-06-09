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

router.post

module.exports = router
