var path = require("path");
const { model } = require("mongoose");
// let db = require("../models");
console.log("html-route working");

model.exports = function(app) {
    app.get("/", function(req, res) {
        console.log("workouts working");

        res.sendFile(path.join(__dirname, "../public/index.html"));

      });
    app.get("/api/exercise", function(req, res) {
        console.log("exercise working");
        res.sendFile(path.join(__dirname, "../public/exercise.html"));

      });

      app.get("/stats", function(req, res) {
        console.log("stats working");
    res.sendFile(path.join(__dirname, "../public/stats.html"));
      });

}