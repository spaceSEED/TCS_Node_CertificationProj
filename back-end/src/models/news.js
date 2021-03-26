const mongoose=require('../db/mongoose');

const News=new mongoose.Schema({
    title:String,
    description:String,
    url:String,
    img_url:String,
    pub_date:Date,
    isSports:Boolean
});

module.exports=mongoose.model('News',News);