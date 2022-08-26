const { Router } = require("express");
const router = Router();
const Estudiantes = require("../models/Estudiantes.js");
const mongoose = require("mongoose");
const {
  findStudents,
  createNewStudent,
  deleteStudent,
  updateStudent,
  findStudentById,
} = require("../controllers/estudiantes.controller.js");

router.get("/", findStudents);

router.get("/:id", findStudents);

router.post("/", createNewStudent);

router.delete("/:id", deleteStudent);

router.put("/:id", updateStudent);

module.exports = router;