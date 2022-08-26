const { model, Schema} = require('mongoose')

const universidadSchema = new Schema({
    name : String,
    active : Boolean
})

module.exports = universidadSchema;