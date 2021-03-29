var express = require('express');
var News = require('../models/news');
var router = express.Router();
const auth = require('../middleware/auth')

router.get('/', async (req, res, next) => {
    try {
        let news = await News.find({ isSports: true }).sort({ pub_date: -1 });
        res.json(news);
    } catch (e) {
        res.status(400).send(e);
    }

});

router.post('/', auth, async (req, res, next) => {
    var o = {
        isSports: true,
        ...req.body
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