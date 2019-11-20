


var express = require('express');
var booksRouter = express.Router();
var {bookModel}=require('../models/bookModel');

function route(nav) {
    var test=[];
    // var books = [
    //     {
    //         image: "harry.jpga",
    //         title: "War and peace",
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
    //         title: "The Bobbit",
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