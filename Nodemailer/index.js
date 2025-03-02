const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service: "gmail",
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "teena910.be22@chitkara.edu.in",
    pass: "tukn ilub wfbw fcoo",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'teena910.be22@chitkara.edu.in', // sender address
    to: "abhi1245goyal@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
