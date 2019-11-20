var express = require('express');
var loginRouter=express.Router();
var {signupModel}=require('../models/signupModel');


function route(nav){


    loginRouter.route("/")
    .get((req,res)=>{
        res.render('login.ejs',
        {nav,
            title:'LogIn'});
    });


    loginRouter.route('/save')
    .post((req,res)=>{

            signupModel.findOne({inputemail:req.body.inputemail, inputpassword:req.body.inputpassword},(err,data)=>{
                if(err){
                    res.json({status:"error"})
                    throw err;
                }
                else if(!data){
                    res.json({status:"failed"});
                }
                else{
                    res.json({status:"Success"})
                }
            });
    })

    return loginRouter;
}

module.exports=route;
