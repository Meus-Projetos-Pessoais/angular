const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const  Cliente = require('./schema/schema');
//const MongoClient = require('mongodb').MongoClient 
//const uri = "mongodb+srv://tech:tech@cluster0-0ngrx.mongodb.net/test?retryWrites=true&w=majority"
//const mongoose =  require('mongoose')
//const cors =  require('cors')
//mongoose.connect('mongodb+srv://tech:tech@cluster0-0ngrx.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});





app.use(bodyParser.urlencoded({extended : true}))

app.listen(3000, function(){});

app.set('View egiee', 'ejs');

app.get('/', (req, res) => {

    res.render('index.ejs')
});

app.post('/show', (req, res) =>{
    console.log(req.body)
    //db.collection('data').save(req.body, (err, result)=>{
        //if(err) return console.log(err)

        //console.log('salvado')
    res.redirect('/')
    //})
});

