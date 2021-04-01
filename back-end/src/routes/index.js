const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')

/* GET home page. */
router.get('/', auth, function (req, res) {
  res.render('index', { page: 0, token: req.headers.cookie });
});

router.get('/newsform', auth, function (req, res) {
  res.render('newsform', { page: 1, token: req.headers.cookie, newsItem: req.body.newsItem });
});

router.post('/edit', auth, (req, res) => {
  newsItem = {
    ...req.body
  }
  res.render('newsform', { page: 2, token: req.headers.cookie, newsItem: newsItem });
});

router.get('/edit-news', auth, function (req, res) {
  res.render('edit-news', { page: 2, token: req.headers.cookie });
});

router.get('/sportform', auth, function (req, res) {
  res.render('sportform', { page: 3, token: req.headers.cookie });
});

router.get('/chat', auth, function (req, res) {
  res.render('chat', { title: 'Chat' });
});

module.exports = router;