var express = require('express');
const { aggregate } = require('../models/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page:0 });
});

router.get('/newsform', function(req, res, next) {
  res.render('newsform', { page:1 });
});

router.get('/edit-news', function(req, res, next) {
  res.render('edit-news', { page:2 });
});

router.get('/sportform', function(req, res, next) {
  res.render('sportform', { page:3 });
});

router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'Chat' });
});

module.exports = router;