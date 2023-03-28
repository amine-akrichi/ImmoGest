const express = require('express')
const dbconnect = require('../config/db')
const router = express.Router()
const user = require('./api/user')
const appartement = require('./api/appartement')
const client = require('./api/client')
const journal = require('./api/journal')
const claim = require('./api/claim')
const authentification = require('./api/authentification')
const sale = require('./api/sale')
const modification = require('./api/modification')
const payment = require('./api/payment')
dbconnect();

router.use('/user',user)
router.use('/appartement',appartement)
router.use('/client',client)
router.use('/journal',journal)
router.use('/claim',claim)
router.use('/authentification',authentification)
router.use('/sale',sale)
router.use('/modification',modification)
router.use('/payment',payment)

router.get('/',(req,res)=>{
    res.send('Hello from API')
})


module.exports = router
