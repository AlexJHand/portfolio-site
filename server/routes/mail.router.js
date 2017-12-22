// Requires
var router = require('express').Router();
var path = require('path');
var nodemailer = require('nodemailer');
require('dotenv').config();

// Credentials class to send email from
class Credentials {
    constructor(name, password) {
        this.username = name;
        this.password = password;
    }
}

// Class instance to send email from 
const siteCredentials = new Credentials(process.env.EMAIL_NAME, process.env.EMAIL_PW);

// Alex's email
const alex = 'alex@alexjhand.com';

// Nodemailer use
const transporter = nodemailer.createTransport({
    service: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: siteCredentials.username,
        pass: siteCredentials.password
    }
})
const mailOptions = {
    from: 'mnsenate.mailer@gmail.com',
    to: input.senator_email,//sends to correct senator's email
    subject: 'Constituent message received',
    html: '<p>Message From</p>' + input.name + '<p>That says</p>' + input.comments + '<p>Thank you Senator, you can contact me at</p>' + input.phone + '<p>or</p>' + input.email

};
transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log(err, info);
    }
});
res.sendStatus(201);

// Exports
module.exports = router;