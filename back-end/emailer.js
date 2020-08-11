require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const emailContactInfo = (userInfo, response) => {
  const emailText = `
  You've been contacted by ${userInfo.userFirstName}!

  Contact details:

      Name: ${userInfo.userFirstName}
      Surname: ${userInfo.userLastName}
      Email: ${userInfo.userEmail}

  ${userInfo.emailContent}
  `;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      clientId: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      refreshToken: process.env.REFRESHTOKEN,
    },
  });

  const mailOptions = {
    from: userInfo.userEmail,
    to: process.env.EMAIL,
    subject: userInfo.emailSubject,
    text: emailText,
  };

  transporter
    .sendMail(mailOptions)
    .then(() => {
      const result = { text: "Email was sent!!!" };
      response.send(result);
      console.log(result.text);
    })
    .catch((err) => {
      const result = { text: "Email failed to send" };
      response.send(result);
      console.log(`<<<****${result.text}****>>>\n`, err);
    });
};

router.post("/send", (req, res) => {
  let userInfo = req.body;
  emailContactInfo(userInfo, res);
});

module.exports = router;
