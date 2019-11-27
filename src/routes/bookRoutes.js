


var express = require('express');
var booksRouter = express.Router();
var {bookModel}=require('../models/bookModel');

function route(nav) {
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
            if(err)
            {
                throw err;
            }
            else{
                res.redirect("/books");
            }
            });

            //res.send("form submitted")
           // res.send(req.body);
        })


   

    booksRouter.route('/edit')
    .post((req,res)=>{
        bookModel.findById(req.body.id,(err,data)=>{
            if(err)
            {
                throw err;
            }
            else{
                res.render('bookUpdate.ejs',{
                    nav,
                    title:"Update Books",
                    data
                })
            }
        })
       
    });

    // booksRouter.route('/delete')
    // .get((req,res)=>{
    //     res.render('bookDelete.ejs',{
    //         nav,title:"Delete Books"
    //     })
    // });



    booksRouter.route('/delete')
    .post((req,res)=>{
        bookModel.findByIdAndDelete(req.body.id,(err,data)=>{
            if(err)
            {
                throw err;
            }
            else{
                res.redirect("/books");
            }
        })
    })





    booksRouter.route('/update')
    .post((req,res)=>{
        bookModel.findByIdAndUpdate(req.body.id,{$set:req.body},(err,data)=>{
            if(err)
            {
                throw err;
            }
             else{
                res.redirect("/books");
            }
        })
    });
    

    booksRouter.route('/readmore')
        .post((req, res) => {
            console.log(req.body.id)
           bookModel.findById(req.body.id,(err,data)=>{
            if(err)
            {
                throw err;
            }
            else{
                res.render('book.ejs', {
                    nav,
                    title: "Book",
                    book: data
                })
    
            }
           });
            
        });



    return booksRouter;
}

module.exports = route;
