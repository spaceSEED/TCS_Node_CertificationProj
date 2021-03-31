const express = require('express');
const router = express.Router();

// body parser and nodemailer for email implementation
var nodemailer = require('nodemailer');


// send email
let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'ammaressajee@gmail.com',
      pass: 'zoo=2582924'
    }
  });
  
  router.post('/', (req, res) => {
    const message = {
      from: 'user@example.com', // Sender address
      to: 'ammaressajee@gmail.com', // List of recipients
      subject: 'User Query', // Subject line
      text: 'your message has been sent!' // Plain text body
    };
  
    transport.sendMail(message, function (err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  
    //res.render('mail', { page: 5, token: req.headers.cookie });
    res.status(200).send();
  });

  module.exports = router;
  