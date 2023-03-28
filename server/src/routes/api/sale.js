const express = require('express')
const router = express.Router()
const Sale = require('../../models/sale')

router.get('/',(req,res)=>{
    res.send("Sale")
})

router.get('/listSales',(req,res)=>{
    Sale.find((error,Sales)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(Sales)
        }
    })
})



router.post('/listClientSales',(req,res)=>{
    let clientData = req.body

    Sale.find({clientId: clientData._id},(error,clientSales)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(clientSales)
        }
    })
})


router.post('/addSale',(req,res)=>{
    let saleData = req.body
    let sale = new Sale(saleData)

    sale.save(sale , (error,createdSale)=>{
        if (error) {
            console.log(error)   
        } else {
            res.status(200).send(createdSale)
        }
    })
})


router.post('/updateSale',(req,res)=>{
    let saleData = req.body
    let saleToUpdate = new Sale(saleData)

    Sale.findOneAndUpdate({_id: saleToUpdate._id},saleToUpdate,{new: true},(error,updatedSale)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(updatedSale)
        }
    })
})



router.post('/deleteSale',(req,res)=>{
    let saleData = req.body

    Sale.findOneAndDelete({_id: saleData._id},(error,deletedSale)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(deletedSale)
        }
    })
})






module.exports = router