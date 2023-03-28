const mongoose = require('mongoose')
const Schema = mongoose.Schema

const saleSchema = new Schema({
    clientId: String,
    appartementNumber: String,
    date: String,
    initialPrice: Number,
    discount: Number,
    discountedPrice: Number,
    parkingPrice:Number,
    cellierPrice: Number,
    extrasPrice: Number,
    totalPrice: Number,

})


module.exports = mongoose.model('sale', saleSchema , 'sales')