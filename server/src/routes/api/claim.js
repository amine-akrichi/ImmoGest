const express = require('express')
const router = express.Router()
const Claim = require('../../models/claim')

router.get('/',(req,res)=>{
    res.send("claim")
})


router.get('/listClaims',(req,res)=>{
    Claim.find((error,claims)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(claims)
        }
    })
})




router.post('/listClientClaims',(req,res)=>{
    let clientData = req.body

    Claim.find({clientId: clientData._id},(error,clientClaims)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(clientClaims)
        }
    })
})





router.post('/addClaim',(req,res)=>{
    let claimData = req.body
    let claim = new Claim(claimData)

    claim.save(claim , (error,createdClaim)=>{
        if (error) {
            console.log(error)   
        } else {
            res.status(200).send(createdClaim)
        }
    })
})


router.post('/updateClaim',(req,res)=>{
    let claimData = req.body
    let claimToUpdate = new Claim(claimData)

    Claim.findOneAndUpdate({_id: claimToUpdate._id},claimToUpdate,{new: true},(error,updatedClaim)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(updatedClaim)
        }
    })
})



router.post('/deleteClaim',(req,res)=>{
    let claimData = req.body

    Claim.findOneAndDelete({_id: claimData._id},(error,deletedClaim)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(deletedClaim)
        }
    })
})









module.exports = router