const express = require('express');
const app  = express();

const data = require('./db/products')


app.set('view engine', 'ejs');
app.set('views', './views/pages');

app.use(express.static('public'));


app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/product', (req, res) =>{
    res.render('product', {data})
})

app.listen(3000, () =>{
    console.log(data)
})



