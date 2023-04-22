const nodemailer = require("nodemailer");
const { ThankyouTemplate } = require("./emailtemplate");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
const SendMail = async (req, res) => {
    const { UserName, UserEmail, EmailBody } = req.body

    NotifyMe(UserName, UserEmail, EmailBody)

    let mailOptions = {
        from: process.env.EMAIL,
        to: UserEmail,
        subject: "Thankyou - from Kunal Mehra",
        html: ThankyouTemplate(UserName),
    }

    await transporter.sendMail(mailOptions)
        .then((item) => {
            return res.json({ Message: `Email Sent Successfully to ${item.accepted[0]}`, success: true })
        }).catch(() => {
            return res.json({ Message: "Unable to send email", success: false })
        })

}
async function NotifyMe(UserName, UserEmail, EmailBody) {
    let mailOptions = {
        from: UserEmail,
        to: process.env.EMAIL,
        subject: `|Source:Portfolio|:${UserName} sent you a message `,
        html: `<b>${UserName + " : " + EmailBody}</b>`,
    }
    await transporter.sendMail(mailOptions)
}
module.exports = { SendMail };