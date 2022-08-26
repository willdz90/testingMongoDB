const { Router } = require('express');
const router = Router();
const cors = require("cors");
const express = require("express");
const RouterEstudiantes = require('../routes/Estudiantes.js')


//Middlewares necesarios
router.use(express.json());
router.use(cors());

//Estableciendo rutas necesarias de la app
router.use('/student', RouterEstudiantes)

module.exports = router;