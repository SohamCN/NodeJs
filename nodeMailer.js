const nodemailer = require('nodemailer')

function sendemail() {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sohamr@capitalnumbers.com",
        pass: "heavyrock669",
      },
    })
  
    var mailOptions = {
      from: "sohamr@capitalnumbers.com",
      to: "rajarshi@capitalnumbers.com, arpita@capitalnumbers.com",
      subject: "Test email for nodemailer",
      text: "This is a test mail to check whether nodemailer is working or not",
    }
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("error==", error)
      } else {
        console.log("info: " + info)
        console.log("Email sent: " + info.response)
      }
    })
  }

sendemail()