const nodemailer = require('nodemailer');
require('dotenv').config()

/**
 * Manda un correo a una dirección
 * @param {import('nodemailer/lib/sendmail-transport').MailOptions} mailOptions Las opciones del correo
 */
async function sendMail(mailOptions) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // gmail.com
    port: 465,// 465
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER, // process.env.GMAIL_USER
      pass: process.env.GMAIL_PASS, // process.env.GMAIL_PASS
    },
  });

  await transporter.sendMail(mailOptions);
}

module.exports = sendMail;