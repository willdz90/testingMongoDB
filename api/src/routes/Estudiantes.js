const { Router } = require("express");
const router = Router();
const Estudiantes = require("../models/Estudiantes.js");
const mongoose = require("mongoose");
const {
  findAllStudents,
  createNewStudent,
  deleteStudent,
} = require("../controllers/estudiantes.controller.js");

router.get("/", findAllStudents);

router.post("/", createNewStudent);

router.delete("/:id", deleteStudent);

module.exports = router;