const mongoose=require('../db/mongoose');
var autoIncrement = require('mongoose-auto-increment');

const News=new mongoose.Schema({
    title:String,
    description:String,
    url:String,
    img_url:String,
    pub_date:Date,
    isSports:Boolean,
    id:{type:Number,unique:true}
});
autoIncrement.initialize(mongoose.connection);

News.plugin(autoIncrement.plugin,{model:"News",field:"id",startAt:1});
module.exports=mongoose.model('News',News);