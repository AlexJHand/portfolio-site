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

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: siteCredentials.username,
        pass: siteCredentials.password
    }
})

// Post route
router.post('/', (req, res) => {
    console.log('In mail.router post', req.body);
    // Set up the details for the email sent
    let mailConfig = {
        from: siteCredentials.username,
        to: alex + ',' + req.body.email,
        subject: req.body.subject,
        html: '<p>' + req.body.message + '</p>'
    }

    // Send email
    transporter.sendMail(mailConfig, function (err, info) {
        // If error or success
        if (err) {
            console.log('sendMail error', err);
            res.sendStatus(500);
        } else {
            console.log('Message sent', info.messageId, info,response);
            res.sendStatus(201);
        }
    })
});

// Exports
module.exports = router;