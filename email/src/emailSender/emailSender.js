var fs = require("fs");
var nodemailer = require("nodemailer");
const auth = require("../authentication/authentication.json");
var receivers = require("../emailReceivers/emailReceivers.json");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: auth
});

for (let receiver of receivers) {
  var mailOptions = {
    from: "NUS Chinese Drama <nuscfacd@gmail.com>",
    to: receiver.email,
    subject: "Excuse Letter for Production Preparation and Performance",
    attachments: receiver.files,
    html:
    'Dear ' + receiver.name + ':<br/><br/>附件中是你的excuse letter，如有缺失或任何其他问题请即刻与P联系！<br/><br/>Warmest Regards,<br/>Shi Tianyuan<br/><a href="mailto:tianyuan.shi@u.nus.edu" style="background-color:black;color:white;font-weight:bold;text-decoration:none;">click here to email me</a><br/>------------<p>Important: This email is confidential and may be privileged. If you are not the intended recipient, please delete it and notify us immediately; you should not copy or use it for any purpose, nor disclose its contents to any other person. Thank you.</p>'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response + ' delivered to:' + receiver.email + ' named: ' + receiver.name);
    }
  });
}
