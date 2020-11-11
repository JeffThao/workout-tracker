const { model } = require("mongoose");
// let db = require("../models");
console.log("api routes");
model.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
        console.log("workouts working");

      });

      app.get("/api/workouts/:id", function(req, res) {
        console.log("workouts id working");
        
      });

      app.get("/api/workouts/range", function(req, res) {
        console.log("workouts range working");

      });

}