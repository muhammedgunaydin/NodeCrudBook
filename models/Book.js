const mongoose = require('mongoose')
const Schema = mongoose.Schema  

const BookSchema = new Schema({
    isbn:{
        type: Number,
        required: true,
        unique: true,
    },
    book_name:{
        type:String,
        required: true
    },
    book_author:{
        type:String,
        required:true
    },
    page_count:{
        type:Number,
        required: true,
    },
    book_count:{
        type:Number,
        required:true
    }
}) 

const Book = mongoose.model('Book', BookSchema)

module.exports = Book