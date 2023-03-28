const express = require('express')
const router = express.Router()
const Payment = require('../../models/payment')

router.get('/',(req,res)=>{
    res.send("Payment")
})

router.get('/listPayments',(req,res)=>{
    Payment.find((error,Payments)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(Payments)
        }
    })
})



router.post('/listSalePayments',(req,res)=>{
    let saleData = req.body

    Payment.find({saleId: saleData._id},(error,salePayments)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(salePayments)
        }
    })
})


router.post('/addPayment',(req,res)=>{
    let paymentData = req.body
    let payment = new Payment(paymentData)

    payment.save(payment , (error,createdPayment)=>{
        if (error) {
            console.log(error)   
        } else {
            res.status(200).send(createdPayment)
        }
    })
})


router.post('/updatePayment',(req,res)=>{
    let paymentData = req.body
    let paymentToUpdate = new Payment(paymentData)

    Payment.findOneAndUpdate({_id: paymentToUpdate._id},paymentToUpdate,{new: true},(error,updatedPayment)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(updatedPayment)
        }
    })
})



router.post('/deletePayment',(req,res)=>{
    let paymentData = req.body

    Payment.findOneAndDelete({_id: paymentData._id},(error,deletedPayment)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(deletedPayment)
        }
    })
})






module.exports = router