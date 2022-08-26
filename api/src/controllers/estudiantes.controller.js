const { Estudiantes } = require("../db.js");

exports.findStudents = async (req, res, next) => {
  const name = req.query.name;
  console.log("name :>> ", name);
  try {
    if (name) {
      await Estudiantes.find({
        $text: {
          $search: name,
          $caseSensitive: false,
        },
      })
        .then((result) => {
          result.length === 0
            ? res.status(404).json({ error: `No student with name: ${name}` })
            : res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      await Estudiantes.find({})
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.senc(err);
        });
    }
  } catch (err) {
    res.send(err);
  }
};

exports.searchStudentById = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Estudiantes.findById(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        const length = Object.keys(err.reason).length;
        if (length === 0)
          res.status(404).json({
            error: "There is no match",
          });
      });
  } catch (err) {
    res.send(err);
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
    await Estudiantes.findOneAndUpdate(queryUpdate, {
      $set: { name: body.name },
    })
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