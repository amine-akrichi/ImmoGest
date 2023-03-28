const mongoose = require('mongoose')
const Schema = mongoose.Schema

const claimSchema = new Schema({
    resolved: Boolean,
    clientId: String,
    type: String,
    details: String,
    response: String,
    date: String
})

module.exports = mongoose.model('claim', claimSchema , 'claims')