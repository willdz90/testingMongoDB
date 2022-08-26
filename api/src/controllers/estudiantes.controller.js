const { Estudiantes } = require("../db.js");
const { conn } = require("../db.js");
const mongoose = require("mongoose");

exports.findStudents = async (req, res, next) => {
  const id = req.params.id;
  console.log('id :>> ', req);
  try {
    if(id){
      const student = await Estudiantes.findById(id);
      res.send(student)
    }else {
      const allStudents = await Estudiantes.find({});
      res.send(allStudents);
    }
  } catch (err) {
    console.log("err :>> ", err);
    res.send(err);
  }
};

// exports.findStudentById = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const student = await Estudiantes.findById(id);
//     res.send(student);
//   } catch (err) {
//     res.send(err)
//   }
// }

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
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  } catch (err) {
    console.log("err :>> ", err);
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    const email = req.params.id;
    await Estudiantes.deleteOne({ email: email })
      .then((result) => {
        console.log("result :>> ", result);
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log("err :>> ", err);
  }
};

exports.updateStudent = async (req, res, next) => {
  try {
    const body = req.body;
    console.log("body :>> ", body);
    const queryUpdate = { email: body.email };
    await Estudiantes.findOneAndUpdate(queryUpdate, { $set: { name: body.name } })
      .then((result) => {
        if (!result) {
          res.send("No hay registros que actualizar");
        }
        res.send(`User ${queryUpdate.email} updated`);
      })
      .catch((err) => {
        console.log("err :>> ", err);
        res.send(err);
      });
  } catch (err) {
    console.log("err :>> ", err);
    res.send(err);
  }
};
