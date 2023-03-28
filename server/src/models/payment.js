const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paymentSchema = new Schema({
    saleId: String,
    number: Number,
    price: Number,
    state: String,
    title: String,
    date: String,
    mode: String,
})

module.exports = mongoose.model('payment', paymentSchema , 'payments')