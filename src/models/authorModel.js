const mongoose=require('mongoose');
var authorSchema=new mongoose.Schema({
    name:{type:String,
            required:true},
    country:String,
    numbook:Number,
    image:String

})
var authorModel=mongoose.model('authors',authorSchema);
module.exports={authorModel};