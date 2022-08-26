const {Schema, model} = require('mongoose')

const sedeSchema = new Schema({
    name : String,
    active : Boolean
})

module.exports = sedeSchema;