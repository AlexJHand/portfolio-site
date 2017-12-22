// Requires
var router = require('express').Router();
var path = require('path');
var nodemailer = require('nodemailer');
require('dotenv').config();

// Nodemailer use
// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'mnsenate.mailer@gmail.com',//example email for sender
//         pass: process.env.MAILERPASSWORD
//     }
// })
// const mailOptions = {
//     from: 'mnsenate.mailer@gmail.com',
//     to: input.senator_email,//sends to correct senator's email
//     subject: 'Constituent message received',
//     html: '<p>Message From</p>' + input.name + '<p>That says</p>' + input.comments + '<p>Thank you Senator, you can contact me at</p>' + input.phone + '<p>or</p>' + input.email

// };
// transporter.sendMail(mailOptions, function (err, info) {
//     if (err) {
//         console.log(err, info);
//     }
// });
// res.sendStatus(201);

// Exports
module.exports = router;