require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();
const postJson = (req, res) => {
    res.status(200).json({"message": "data"});
};
app.use("/", express.static(path.join(__dirname, "static")));

app.post("/json", postJson);
const server = app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", server.address().port);
});