const nodemailer = require('nodemailer');

const sendEmail = (obj) => {
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
        subject: `${obj.subject}`,
        // text: `Hello, ${obj.username}! Welcome to our app!`
        html: `${obj.body}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        } else {
            return console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendEmail

