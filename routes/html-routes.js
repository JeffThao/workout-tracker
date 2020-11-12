const path = require("path");

console.log("html-route working");

module.exports = function (app) {
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
    res.send("connected");
  });

}