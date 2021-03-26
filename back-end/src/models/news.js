<<<<<<< Updated upstream
const mongoose = require('../db/mongoose');
=======
const mongoose=require('../db/mongoose');
//var autoIncrement = require('mongoose-auto-increment');
>>>>>>> Stashed changes

const News = new mongoose.Schema({
    title:String,
    description:String,
    url:String,
    img_url:{type:String,default:"https://images.unsplash.com/photo-1488474739786-757973c2dff6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80"},
    pub_date:{type:Date,default:Date.now()},
    isSports:Boolean,
<<<<<<< Updated upstream
    id:{type:Number,unique:true}
});
=======
    //id:{type:Number,unique:true}
});
//autoIncrement.initialize(mongoose.connection);

//News.plugin(autoIncrement.plugin,{model:"News",field:"id",startAt:1});
module.exports=mongoose.model('News',News);
>>>>>>> Stashed changes
