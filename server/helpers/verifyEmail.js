const sendEmail = require("./nodemailer");

const verifyEmail = (email) => {
    let randomStr = Math.floor(Math.random() * 10);
    sendEmail({
        email,
        subject: "Verify your email",
        
    })

}

module.exports = verifyEmail;