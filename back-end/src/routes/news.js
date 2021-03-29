var express = require('express');
const { render } = require('../app');
var News=require('../models/news');
var router = express.Router();

//returns all normal news
router.get('/', async (req,res,next) =>{
    try{
        let news= await News.find({isSports:false}).sort({pub_date:-1});
        res.render('edit-news', {page:2,data: news, token:req.headers.cookie });
        //res.status(200).json(news);
    }catch(e){
        res.status(400).json(e);
    }

});

//returns all news inc Sports
router.get('/all', async (req,res,next) =>{
    try{
        let news= await News.find({}).sort({pub_date:-1});
        res.render('edit-news', {page:2,data: news, token:req.headers.cookie });
    }catch(e){
        res.status(400).json(e);
    }

});

//DELETE
router.get('/delete/:id',async (req,res)=>{
    let id=req.params.id;
    try{
        await (await News.findOne({_id:id})).delete();
        res.status(200).redirect('/news/all');
    }catch(e){
        res.status(400).json(e);
    }
});

//Edit:PUT and Add:POST
router.post('/', async (req,res,next) =>{
    console.log("recieved");
    if(req.body._method=="PUT"){
        console.log("PUT");
        var o={
            ...req.body
        };
        try{
            await News.findOne({_id:req.body._id}).update(o);
            res.status(200).redirect('/news/all');
        }catch(e){
            res.status(400).json(e);
        }
    }else{
        var o={
            isSports:false,
            ...req.body
        };
        try{
            const n = new News(o);
            let news= await n.save();
            res.status(200).redirect('/news/all');
        }catch(e){
            res.status(400).json(e);
        }
    }
});

module.exports=router;