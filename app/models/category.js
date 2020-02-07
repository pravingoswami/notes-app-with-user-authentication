const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categorySchema = new Schema({
    name : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category