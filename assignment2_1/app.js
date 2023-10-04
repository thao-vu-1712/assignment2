const path = require("path");

const express = require("express");

require("dotenv").config();

const app = express();

app.use("/", express.static(path.join(__dirname, "public")));

const json = (req, res) => {
    res.status(200).json({"message": "hihi"});
}

app.post("/json", json);

const server = app.listen(process.env.PORT, () => {
    console.log("Listening to port: ", server.address().port);
})