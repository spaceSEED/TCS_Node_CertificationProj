var express = require('express');
var News=require('../models/news');
var router = express.Router();

router.get('/', async (req,res,next) =>{
    try{
        let news= await News.find({isSports:false}).sort({pub_date:-1});
        res.status(200).json(news);
    }catch(e){
        res.status(400).json(e);
    }

});

router.get('/all', async (req,res,next) =>{
    try{
        let news= await News.find({}).sort({pub_date:-1});
        res.status(200).json(news);
    }catch(e){
        res.status(400).json(e);
    }

});

router.put('/', async (req,res)=>{
    var o={
        ...req.body//assume article type variable;
    };
    try{
        let news= await News.findOne({_id:id}).update(o);
        res.status(200).json(news);
    }catch(e){
        res.status(400).json(e);
    }
});

router.delete('/:id',async (req,res)=>{
    let id=req.params.id;
    try{
        await (await News.findOne({_id:id})).delete();
        res.status(200).send("Deleted Successfully");
    }catch(e){
        res.status(400).json(e);
    }
});

router.post('/', async (req,res,next) =>{
    //console.log(req);
    var o={
        isSports:false,
        ...req.body
    };
    try{
        const n = new News(o);
        let news= await n.save();
        res.status(200).send("Success");
    }catch(e){
        res.status(400).json(e);
    }

});

module.exports=router;