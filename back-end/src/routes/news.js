var express = require('express');
const { render } = require('../app');
var News = require('../models/news');
var router = express.Router();
const auth = require('../middleware/auth');
var multer =require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname );
    }
  });
  var upload=multer({storage:storage});

//returns all normal news

router.get('/', async (req, res) => {
    try {
        let news = await News.find({ isSports: false }).sort({ pub_date: -1 });
        //res.render('edit-news', {page:2,data: news, token:req.headers.cookie });
        res.status(200).json(news);
    } catch (e) {
        res.status(400).json(e);
    }

});

router.get('/img', async (req, res) => {
    try {
        let news = await News.find({ isSports: false, img_url: { $exists: true } }).sort({ pub_date: -1 });
        //res.render('edit-news', {page:2,data: news, token:req.headers.cookie });
        res.status(200).json(news);
    } catch (e) {
        res.status(400).json(e);
    }

});

//returns all news inc Sports
router.get('/all', async (req, res) => {
    try {
        let news = await News.find({}).sort({ pub_date: -1 });
        res.render('edit-news', { page: 2, data: news, token: req.headers.cookie });
    } catch (e) {
        res.status(400).json(e);
    }

});

//DELETE
router.get('/delete/:id', auth, async (req, res) => {
    let id = req.params.id;
    try {
        news = await News.findByIdAndDelete(id);
        res.status(200).redirect('/news/all');
    } catch (e) {
        res.status(400).json(e);
    }
});

//Edit:PUT and Add:POST
router.post('/', auth, upload.single('photo'), async (req, res) => {
    if (req.body._method == "PUT") {
        let img=req.body.img_url;
            if(req.file){
                //console.log("file uploaded");
                img="http://localhost:3000/images/"+req.file.originalname;
            }
        var o = {
            img_url:img,
            title:req.body.title,
            description:req.body.description,
            pub_date:req.body.pub_date,
            url:req.body.url,
            _id:req.body._id,
            isSports:req.body.isSports
        };
        try {
            await News.findOne({ _id: req.body._id }).update(o);
            res.status(200).redirect('/news/all');
        } catch (e) {
            res.status(400).json(e);
        }
    } else {
        let img=req.body.img_url;
            if(req.file){
                //console.log("file uploaded");
                img="http://localhost:3000/images/"+req.file.originalname;
            }
            var o = {
                isSports: false,
                img_url:img,
                title:req.body.title,
                description:req.body.description,
                pub_date:req.body.pub_date,
                url:req.body.url
            };
        try {
            const n = new News(o);
            let news = await n.save();
            res.status(200).redirect('/news/all');
        } catch (e) {
            res.status(400).json(e);
        }
    }
});

module.exports = router;