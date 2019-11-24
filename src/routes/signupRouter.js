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
                res.json({status:"Failed"});
            }
            else{
                res.json({status:"Success"});
            }

        });

       
    })
    return signupRouter;
}
module.exports=route;
