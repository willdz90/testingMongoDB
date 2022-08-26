const {Schema, model} = require('mongoose')

const clasesSchema = new Schema({
    name : String,
    active : Boolean
})

module.exports = clasesSchema;