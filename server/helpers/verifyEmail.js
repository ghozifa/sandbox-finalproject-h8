const nodemailer = require('nodemailer');
const verify = require("../assets/emailTemplates/verify");

const verifyEmail = (obj) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fp.zurichfox@gmail.com',
            pass: 'kpzyiguzhthqabum'
        }
    });

    var mailOptions = {
        from: 'fp.zurichfox@gmail.com',
        to: `${obj.email}`,
        subject: `WOK IT OUT - Verify Email`,
        html: verify(obj)
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        } else {
            return console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = verifyEmail;

//           <p>Please verify your email, <a href="http://localhost:3000/verified/${obj.token}">Click here!<a/><p>