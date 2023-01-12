const sgMail = require("@sendgrid/mail");
const config = require("../configSendGrid")
const {SEND_APY_KEY} = process.env

sgMail.setApiKey(SEND_APY_KEY)



module.exports = sgMail ; 