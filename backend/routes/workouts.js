const express = require("express");
const Workout = require("../models/workoutModel");

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//All workouts
router.get("/", getWorkouts);

//Single workout
router.get("/:id", getWorkout);

//New workout
router.post("/", createWorkout);

//Delete a workout
router.delete("/:id", deleteWorkout);

//Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
