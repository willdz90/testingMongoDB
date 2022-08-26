const {Schema, model} = require('mongoose')

const profesorSchema = new Schema({
    name : String,
    last_name : String,
    email : String,
    active : Boolean
})

module.exports = profesorSchema;