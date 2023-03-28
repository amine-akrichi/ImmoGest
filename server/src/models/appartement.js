const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appartementSchema = new Schema({
    number: String,
    etage: String,
    bloc: String,
    type: String,
    orientation: String,
    vue: String,
    surface: Number,
    parking: Boolean ,
    cellier: Boolean,
    price_m2:Number
})

module.exports = mongoose.model('appartement', appartementSchema , 'appartements')