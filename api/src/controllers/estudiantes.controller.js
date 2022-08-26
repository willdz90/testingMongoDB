const Estudiantes = require("../models/Estudiantes.js");
const mongoose = require("mongoose");

exports.findAllStudents = async (req, res, next) => {
  try {
    const allStudents = await Estudiantes.find({});
    res.send(allStudents);
  } catch (error) {
    console.log("error :>> ", error);
  }
};

exports.createNewStudent = async (req, res, next) => {
  const name = req.body.name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const active = req.body.active;

  try {
    const student = new Estudiantes({
      name: name,
      last_name: last_name,
      email: email,
      active: active || false,
    });
    student
      .save()
      .then(() => {
        res.send(`Student ${name} ${last_name} created: Success`);
        mongoose.connection.close();
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  } catch (error) {
    console.log("error :>> ", error);
  }
};

exports.deleteStudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        // const filteredStudents = await Estudiantes.findByIdAndDelete({ id : id})

        // console.log('filteredStudents :>> ', filteredStudents);
        res.send(id)
    } catch (error) {
        
    }
}