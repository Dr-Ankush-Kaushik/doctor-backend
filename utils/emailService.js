const nodemailer = require("nodemailer");
const config = require('config');
const fromemail = config.get('fromemail');
const password = config.get('password');

// create reusable transporter object using the default SMTP transport
let EmailService = nodemailer.createTransport({
    service: 'gmail',
    user: 'smpt.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'Login',
        user: fromemail, // email
        pass: password, // password
    },
});

module.exports = EmailService;