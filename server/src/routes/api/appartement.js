const express = require('express')
const router = express.Router()
const Appartement = require('../../models/appartement')


router.get('/',(req,res)=>{
    res.send("appartement")
})

router.get('/listAppartements',(req,res)=>{
    Appartement.find((error, appartementsList)=>{
        if (error) {
            console.log(error); 
        } else {
            res.status(200).send(appartementsList)
        }
    })
})



router.post('/addAppartement',(req,res)=>{
    let appartementData = req.body
    let appartement = new Appartement(appartementData)
    appartement.save(appartement,(error,createdAppartement)=>{
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(createdAppartement)
        }
    })
})


router.post('/updateAppartement',(req,res)=>{
    let appartementData = req.body
    let appartementToUpdate = new Appartement(appartementData)

    Appartement.findOneAndUpdate({_id: appartementToUpdate._id},appartementToUpdate,{new: true},(error,updatedAppartement)=>{
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(updatedAppartement)
        }
    })
})


router.post('/deleteAppartement',(req,res)=>{
    let appartementData = req.body

    Appartement.findOneAndDelete({_id: appartementData._id},(error, deletedAppartement)=>{
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(deletedAppartement)
        }
    })
})







module.exports = router