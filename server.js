const express = require('express');
const app = express()

app.listen(3000, function(){

    console.log('Rodando.')
}
);

app.set('View egiee', 'ejs');

app.get('/', (req, res) => {

    res.render('index.ejs')
});

app.post('/show', (req, res) =>{
    console.log('OI de ovo')
});