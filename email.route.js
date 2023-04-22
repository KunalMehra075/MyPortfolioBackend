const express = require("express");
const emailRouter = express.Router()

emailRouter.get("/", (req, res) => {
    try {
        res.json({ Message: "This is the Email Router" });
    } catch (err) {
        console.log(err);
        res.json({ Error: err })
    }
});
module.exports = { emailRouter };