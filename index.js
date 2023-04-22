const express = require("express");
const cors = require("cors");
const { SendMail } = require("./controllers/sendmail");

const app = express();

app.use(cors("*"))
app.use(express.json());
app.post("/sendmail", SendMail)

app.get("/", (req, res) => {
    try {
        res.json({ Message: "Welcome to My Portforlio Backend" });
    } catch (err) {
        console.log(err);
        res.json({ Error: err })
    }
});

app.listen(4500, () => {
    console.log("Server Running in port 4500");
})