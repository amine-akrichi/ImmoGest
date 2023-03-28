const mongoose = require('mongoose')
const Schema = mongoose.Schema

const modificationSchema = new Schema({
    saleId:String,
    date: String,
    modification: String,
    modificationPrice: String
})


module.exports = mongoose.model('modification', modificationSchema , 'modifications')