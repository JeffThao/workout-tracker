const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ day: -1 })
    .limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.get("/api/workouts", (req, res) => {
  Workout.find({})

    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", function (req, res) {
  Workout.update(
    req.body,
    {
      where: {
        id: req.body.id,
        type: req.body.type,
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        reps: req.body.reps,
        sets: req.body.sets,
        distance: req.body.distance
      }
    }).then(function (dbWorkout) {
      console.log(req.body);
      res.json(dbWorkout);
    });
});

module.exports = router;
