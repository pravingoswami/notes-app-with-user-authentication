const mongoose = require('mongoose')

const Schema = mongoose.Schema

const notSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    noteImage : {
        type : String
    },
    category:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    },
    user : {
        type : mongoose.Schema.Types.ObjectId
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const Note = mongoose.model('Note', notSchema)

module.exports = Note