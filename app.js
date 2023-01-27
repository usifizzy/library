const express = require('express');

//express app
const app = express();

//set view engine
app.set('view engine', 'ejs');

app.listen(3000, ()=>{
    console.log('server listening on port 3000');
});

app.get('/', (req, res)=>{
    res.render('index')
});