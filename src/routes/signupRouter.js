var express = require('express');
var signupRouter=express.Router();
var {signupModel}=require('../models/signupModel');
  
function route(nav){


    signupRouter.route("/")
    .get((req,res)=>{
        res.render("signup.ejs",{nav,title:"SignUp"});
    });

    signupRouter.route('/save')
    .post((req,res)=>{
        var add=new signupModel(req.body);
        add.save((err,data)=>{
            if(err){
                throw err;
            }
            else{
                res.send(data);
            }

        });

       
    })
    return signupRouter;
}
module.exports=route;
