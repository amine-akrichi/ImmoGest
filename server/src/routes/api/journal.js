const express = require('express')
const router = express.Router()
const Journal = require('../../models/journal')

router.get('/',(req,res)=>{
    res.send("journal")
})

router.get('/listJournals',(req,res)=>{
    Journal.find((error,journals)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(journals)
        }
    })
})



router.post('/listClientJournals',(req,res)=>{
    let clientData = req.body

    Journal.find({clientId: clientData._id},(error,clientJournals)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(clientJournals)
        }
    })
})


router.post('/addJournal',(req,res)=>{
    let journalData = req.body
    let journal = new Journal(journalData)

    journal.save(journal , (error,createdJournal)=>{
        if (error) {
            console.log(error)   
        } else {
            res.status(200).send(createdJournal)
        }
    })
})


router.post('/updateJournal',(req,res)=>{
    let journalData = req.body
    let journalToUpdate = new Journal(journalData)

    Journal.findOneAndUpdate({_id: journalToUpdate._id},journalToUpdate,{new: true},(error,updatedJournal)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(updatedJournal)
        }
    })
})



router.post('/deleteJournal',(req,res)=>{
    let journalData = req.body

    Journal.findOneAndDelete({_id: journalData._id},(error,deletedJournal)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(deletedJournal)
        }
    })
})






module.exports = router