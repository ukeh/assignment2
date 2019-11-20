var express = require('express');
var authorRouter = express.Router();

var {authorModel}=require('../models/authorModel');
var test=[];

// var authors = [{ name: "J.K. Rowling", country: "England", Books: 20, image: 'rowling.jpeg' },
// { name: "J. D. Salinger", country: "America", Books: 12, image: 'salinger.jpg' },
// { name: "Chetan Bhagat", country: "India", Books: 2, image: 'chetan.jpg' },
// { name: "R. K. Narayan", country: "India", Books: 10, image: 'rk.jpg' },
// { name: "Ruskin Bond", country: "India", Books: 25, image: 'ruskin.jpg' },
// { name: "Arundhati Roy", country: "India", Books: 50, image: 'aru.jpg' }];

function route(nav) {

    authorRouter.route('/')
        .get((req, res) => {

            authorModel.find((err,data)=>{
                if(err){
                    throw err;
                }
                else{
                    test=data;
                    res.render('authors.ejs', {
                        nav,
                        title: "Authors",
                       authors:data
                    }
                    )
                }
            });

        });
    authorRouter.route('/add')
    .get((req,res)=>{
        res.render('addAuthor.ejs', {
            nav,
            title: "Add Author",
        }
        )
    })   


    authorRouter.route('/save')
    .post((req,res)=>{
        var add=new authorModel(req.body);
        add.save((err,data)=>{
            if(err){
                res.json({status:"error"});
                throw err;
            }
            else{
                res.json({status:"Success"});
            }
        });
    })

    authorRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render('author.ejs', {
                nav,
                title: "Author",
                author: test[id]
            }
            )
        })


    return authorRouter;
}
module.exports = route;