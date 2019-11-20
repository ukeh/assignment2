const mongoose=require('mongoose');
var studentSchema=new mongoose.Schema({
    title:{type:String,
        required:true},
    author:String,
    genre:String,
    image:String
})
var bookModel=mongoose.model('books',studentSchema)
module.exports={bookModel}