const mongoose = require('mongoose')
const Schema = mongoose.Schema

const journalSchema = new Schema({
    clientId: String,
    date: String,
    type: String,
    title: String,
    content: String
})


module.exports = mongoose.model('journal', journalSchema , 'journals')