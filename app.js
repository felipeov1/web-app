const express = require('express');
const app  = express();

app.use(express.json({extended: true}))
app.use(express.json());

const routes = require('./routes/get')
const routes_1 = require('./routes/post')
const routes_2 = require('./routes/put')


app.use(routes, routes_1, routes_2);

app.set('view engine', 'ejs');
app.set('views', './views/pages');

app.use(express.static('public'));


app.listen(3000, () =>{
    console.log(`Server running on http://localhost:3000/home`)
})




