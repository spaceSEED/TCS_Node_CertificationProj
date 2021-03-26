var express = require('express');
const User = require('../models/user')
var router = express.Router();

/* Post user to DB */
router.post('/', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    return res.status(201).json(user);
  } catch (e) {
    return res.status(400).send(e);
  }
});

/* Get user by ID */
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

/* Login user */
router.post('/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    res.status(200).json(user)
  } catch (e) {
    res.status(500).send(e)
  }
})

/* Get all users (for dev purposes) */
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users)
  } catch (e) {
    return res.status(400).send(e);
  }
})

module.exports = router;
