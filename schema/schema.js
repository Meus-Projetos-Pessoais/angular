const { Schema, model}  = require('mongoose')
const mongoose = require('mongoose')

const clienteSchema = new Schema({
    cpf:{
        type : String,
        required:true,
    },
    nome:{
        type : String,
        required:true,
    },
    cep: {
            type :String,
            required: true,
        },
    rua:{
        type:String,
        required: true,
    },
    numero:{
        type:String,
        required: true,
    },
    bairro:{
        type:String,
        required: true,
    },
    score:[
        {
            pontuacao: String,
    }]

},

{
    timestamps: true,

});

module.exports =  mongoose.model('Cliente', clienteSchema);