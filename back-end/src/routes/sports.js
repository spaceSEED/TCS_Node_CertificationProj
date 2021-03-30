var express = require('express');
var News = require('../models/news');
var router = express.Router();
const auth = require('../middleware/auth')
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });

router.get('/', async (req, res, next) => {
    try {
        let news = await News.find({ isSports: true }).sort({ pub_date: -1 });
        res.json(news);
    } catch (e) {
        res.status(400).send(e);
    }

});

router.post('/', auth, upload.single('photo'), async (req, res, next) => {
    let img = req.body.img_url;
    if (req.file) {
        //console.log("file uploaded");
        img = "http://localhost:3000/images/" + req.file.originalname;
    }
    var o = {
        isSports: true,
        img_url: img,
        title: req.body.title,
        description: req.body.description,
        pub_date: req.body.pub_date,
        url: req.body.url
    };
    try {
        const n = new News(o);
        let news = await n.save();
        res.status(200).redirect('/news/all');
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;