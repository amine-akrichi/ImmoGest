const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema({
    creationDate: {
        type: Date,
        default: Date.now,
    },
    userId:String,
    type: String,
    cin: String,
    name: String,
    lastname: String,
    telephone: String,
    email: String,
    age: String,
    gender: String,
    originAdress: String,
    habitationAdress: String,
    otherhabitationAdress: String,
    infoOrigin: String,

    interestedInappartementType: String,
    interestedInparking: Boolean,
    interestedIncellier: Boolean,
    
    objectif: String,
    paymentMode: String,
    raisonToBuy: String,

    globalImpressionRepresentative: String,
    globalImpressionVisit: String,
    globalImpressionProduct: String,

    interested: Boolean,
    interestedInSecondSlice: Boolean,
    purchasePromiseSigned: Boolean,
    reservationProtocoleSigned: Boolean,
    intermediate: Boolean,
    notInterested: Boolean,
    
    remarks: String
})

module.exports = mongoose.model('client',clientSchema,'clients')