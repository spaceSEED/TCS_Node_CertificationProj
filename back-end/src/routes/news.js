const express = require('express');
const News = require('../models/news');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage });

//returns all normal news
router.get('/', async (req, res) => {
    try {
        const news = await News.find({ isSports: false }).sort({ pub_date: -1 });
        res.status(200).send(news);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/img', async (req, res) => {
    try {
        const news = await News.find({ isSports: false, img_url: { $exists: true } }).sort({ pub_date: -1 });
        res.status(200).send(news);
    } catch (err) {
        res.status(400).send(err);
    }
});

//returns all news inc Sports
router.get('/all', async (req, res) => {
    try {
        let news = await News.find({}).sort({ pub_date: -1 });
        res.render('edit-news', { page: 2, data: news, token: req.headers.cookie });
    } catch (err) {
        res.status(400).send(err);
    }
});

//DELETE
router.get('/delete/:id', auth, async (req, res) => {
    let id = req.params.id;

    try {
        const news = await News.findByIdAndDelete(id);
        res.status(200).redirect('/news/all');
    } catch (err) {
        res.status(400).send(err);
    }
});


/* Add News */
router.post('/add', auth, upload.single('photo'), async (req, res) => {
    let img = req.body.img_url;

    if (req.file) {
        //console.log("file uploaded");
        img = "http://localhost:3000/images/" + req.file.originalname;
    }

    const newsDao = {
        isSports: false,
        img_url: img,
        title: req.body.title,
        description: req.body.description,
        pub_date: req.body.pub_date,
        url: req.body.url,
        author: req.body.author
    };

    try {
        const news = new News(newsDao);
        await news.save();
        res.status(200).redirect('/news/all');
    } catch (err) {
        res.status(400).send(err);
    }
});

/* Edit News */
router.post('/edit', auth, upload.single('photo'), async (req, res) => {
    let img = req.body.img_url;
    if (req.file) {
        img = "http://localhost:3000/images/" + req.file.originalname;
    }

    const news = {
        img_url: img,
        title: req.body.title,
        description: req.body.description,
        pub_date: req.body.pub_date,
        url: req.body.url,
        _id: req.body._id,
        isSports: req.body.isSports,
        author: req.body.author
    };

    try {
        await News.findOne({ _id: req.body._id }).update(news);
        res.status(200).redirect('/news/all');
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;