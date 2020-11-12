const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [
        {
            type: {
                type: String,
                trim: true,
                required: "Is this for cardio or resistance training?"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter an exercise."
            },
            duration: {
                type: Number,
                required: "Enter an exercise duration in minutes"
              },
              weight: {
                type: Number
              },
              reps: {
                type: Number
              },
              sets: {
                type: Number
              },
              distance: {
                type: Number
              }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;