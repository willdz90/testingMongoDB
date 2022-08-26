const {Schema, model} = require('mongoose')

const estudiantesSchema = new Schema({
    name : String,
    last_name : String,
    email : String,
    active : Boolean,
})

module.exports = estudiantesSchema;