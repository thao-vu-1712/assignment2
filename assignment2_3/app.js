require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();

app.use("/", express.static(path.join(__dirname, "static")));

const server = app.listen(process.env.PORT, (req, res) => {
    console.log("Listening on port: ", server.address().port);
});