const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const  Cliente = require('./schema/schema');
const score = require('./score/score')
const MongoClient = require('mongodb').MongoClient 
const uri = "mongodb+srv://tech:tech@cluster0-0ngrx.mongodb.net/test?retryWrites=true&w=majority"
//const mongoose =  require('mongoose')
const cors =  require('cors')
//mongoose.connect('mongodb+srv://tech:tech@cluster0-0ngrx.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});


MongoClient.connect(uri, (err, client) => {
    if(err) return console.log(err)
    db = client.db('tech_challenge');
    
    app.listen(5000,() => {
        console.log("Server rodando ")
    });
})



app.use(bodyParser.urlencoded({extended : true}))

app.listen(3000, function(){});

app.get('/', (req, res) => {

    res.render('index.ejs')

    let cursor =  db.collection('tech_challenge').find();
});

app.post('/show', (req, res) =>{
    //console.log(req.body)
    db.collection('tech_challenge').save(req.body, (err, result)=>{
        if(err) return console.log(err)
        
        console.log('Dados salvo com sucesso.');
    res.redirect('/')
    })
});

app.get('/show', (req, res) => {
    db.collection('tech_challenge').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('show.ejs', { data: results })
    })
});


app.route('/delete/:id')
.get((req,res) => {
    var id = req.params.id
    var ObjectId = require('mongodb').ObjectID;
    db.collection('tech_challenge').deleteOne({_id:ObjectId(id)}, (err, result)=>
    {
        if(err) return res.send(500, err)

        console.log('Cliente deletado da base de dados');
        res.redirect('/show');
    }
    )

});

app.route('/edit/:id')
.get((req, res) => {
  var id = req.params.id

  db.collection('tech_challenge').find(ObjectId(id)).toArray((err, result) => {
    if (err) return res.send(err)
    res.render('edit.ejs', { data: result })
  })
})
.post((req, res) => {
  var id = req.params.id
  var nome = req.body.nome
  

  db.collection('tech_challenge').updateOne({_id: ObjectId(id)}, {
    $set: {
      nome: nome,
     
    }
  }, (err, result) => {
    if (err) return res.send(err)
    res.redirect('/show')
    console.log('Atualizado no Banco de Dados')
  })
})