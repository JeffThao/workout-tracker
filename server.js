const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const User = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use = function use(fn) {
    let offset = 0;
    const path = "/";
}

app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", { useNewUrlParser: true });


app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});


