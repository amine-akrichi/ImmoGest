const express = require('express')
const router = express.Router()
const Modification = require('../../models/modification')

router.get('/',(req,res)=>{
    res.send("Modification")
})

router.get('/listModifications',(req,res)=>{
    Modification.find((error,Modifications)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(Modifications)
        }
    })
})



router.post('/listSaleModifications',(req,res)=>{
    let saleData = req.body

    Modification.find({saleId: saleData._id},(error,saleModifications)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(saleModifications)
        }
    })
})


router.post('/addModification',(req,res)=>{
    let modificationData = req.body
    let modification = new Modification(modificationData)

    modification.save(modification , (error,createdModification)=>{
        if (error) {
            console.log(error)   
        } else {
            res.status(200).send(createdModification)
        }
    })
})


router.post('/updateModification',(req,res)=>{
    let modificationData = req.body
    let modificationToUpdate = new Modification(modificationData)

    Modification.findOneAndUpdate({_id: modificationToUpdate._id},modificationToUpdate,{new: true},(error,updatedModification)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(updatedModification)
        }
    })
})



router.post('/deleteModification',(req,res)=>{
    let modificationData = req.body

    Modification.findOneAndDelete({_id: modificationData._id},(error,deletedModification)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(deletedModification)
        }
    })
})






module.exports = router