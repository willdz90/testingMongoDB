const { Router } = require("express");
const router = Router();
const {
  findStudents,
  createNewStudent,
  deleteStudent,
  updateStudent,
  searchStudentById,
} = require("../controllers/estudiantes.controller.js");

router.get("/", findStudents);

router.get("/:id", searchStudentById);

router.post("/", createNewStudent);

router.delete("/:id", deleteStudent);

router.put("/:id", updateStudent);

module.exports = router;