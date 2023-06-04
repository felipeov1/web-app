const express = require('express');
const app  = express();

app.use(express.json());

const routes = require('./routes/get')

app.use('/', routes)

app.set('view engine', 'ejs');
app.set('views', './views/pages');

app.use(express.static('public'));


app.listen(3000, () =>{
    console.log(`Server running on http://localhost:3000/home`)
})




