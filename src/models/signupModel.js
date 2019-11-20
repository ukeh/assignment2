const mongoose=require('mongoose');
var signupSchema=new mongoose.Schema({

    firstname:{type:String,
                required:true},
    lastname:String,
    inputemail:String,
    inputpassword:String,
    confirmpassword:String,
    dob:Date,
    gender:String,
    check:{type:[String],
    required:true},
    country:String,
    address:String,
    phone:Number,
    agree:{type:String,
            required:true}

});
var signupModel=mongoose.model('logdata',signupSchema);
module.exports={signupModel}