


var express = require('express');
var booksRouter = express.Router();
var {bookModel}=require('../models/bookModel');

function route(nav) {
    var test=[];
    // var books = [
    //     {
    //         image: "harry.jpga",
    //         title: "Harry Potter",
    //         genre: "Historical Fiction",
    //         auhtor: "J K Rowlink"
    //     },
    //     {
    //         image: "gully.jpeg",
    //         title: "Gulliver's Travels ",
    //         genre: "Fantasy",
    //         auhtor: "Jonathan Swift"
    //     },
    //     {
    //         image: "hobbit.jpg",
    //         title: "The Hobbit",
    //         genre: "Fantasy",
    //         auhtor: "J R R Tolkien"
    //     },
    //     {
    //         image: "pi.jpg",
    //         title: "Life of Pi",
    //         genre: "philosophical novel",
    //         auhtor: "Yann Martel"
    //     },
    //     {
    //         image: "lord.jpeg",
    //         title: "The Lord of The Rings",
    //         genre: "Fantasy",
    //         auhtor: "J R R Tolkien"
    //     },
    // ];


    booksRouter.route('/')
        .get((req, res) => {
            bookModel.find((err,data)=>{
                if(err){
                        throw err;
                }
                else{
                    test=data;
                    res.render('books.ejs', {
                        nav,
                        title: "Books",
                        books:data
                    })
                    }

            })

       
        });

    booksRouter.route('/add')
        .get((req, res) => {
            res.render('addbooks.ejs', {
                nav, 
                title: "Add Books"
            })
        });

    booksRouter.route('/save')
        .post((req, res) => {
            var addbook=new bookModel(req.body);
            addbook.save((err,data)=>{
                if(err){
                        res.json({status:"error"});
                        throw err;
                }
                else{
                        res.json({status:"success"});
                }
            });

            //res.send("form submitted")
           // res.send(req.body);
        })


   

    booksRouter.route('/update')
    .get((req,res)=>{
        res.render('bookUpdate.ejs',{
            nav,
            title:"Update Books"
        })
    });

    booksRouter.route('/delete')
    .get((req,res)=>{
        res.render('bookDelete.ejs',{
            nav,title:"Delete Books"
        })
    });


    booksRouter.route('/delete/remove')
    .post((req,res)=>{
        bookModel.deleteOne({title:req.body.title},(err,data)=>{
            if(err)
            {
                res.json({status:"Failed"});
            }
            else if(data.n==0){
                res.json({status:"No match found"});
            }
            else{
                res.json({status:"Success"});
            }
        })
    });



    booksRouter.route('/update/save')
    .post((req,res)=>{
        bookModel.updateOne({title:req.body.title},{$set:req.body},(err,data)=>{
            if(err)
            {
                res.json({"status":"Failed"});
            }
            else if(data.n==0){
                res.json({status:"No match found"});
            }
            else{
                res.json({status:"Success"});
            }
        })
    });
    

    booksRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render('book.ejs', {
                nav,
                title: "Book",
                book: test[id]
            })

        });



    return booksRouter;
}

module.exports = route;