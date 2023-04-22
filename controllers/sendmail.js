const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
const SendMail = async (req, res) => {
    const { UserEmail, EmailBody } = req.body

    NotifyMe(UserEmail, EmailBody)

    let mailOptions = {
        from: process.env.EMAIL,
        to: UserEmail,
        subject: "Thankyou - from Kunal Mehra",
        html: `<b>Thanks for visiting my portfolio, I have recieved your Message, Will reply you soon</b>`,
    }

    await transporter.sendMail(mailOptions)
        .then((item) => {
            return res.json({ Message: `Email Sent Successfully to ${item.accepted[0]}`, success: true })
        }).catch(() => {
            return res.json({ Message: "Unable to send email", success: false })
        })

}
async function NotifyMe(UserEmail, EmailBody) {
    let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `<Portfolio Email> You got an email from :${UserEmail}`,
        html: `<b>${EmailBody}</b>`,
    }
    await transporter.sendMail(mailOptions)
}
module.exports = { SendMail };