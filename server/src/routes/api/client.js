const express = require('express')
const router = express.Router()
const Client = require('../../models/client')

router.get('/',(req,res)=>{
    res.send("client")
})

router.get('/listClients',(req,res)=>{
    Client.find((error,clients)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(clients)
        }
    })
})

router.post('/listOneClient',(req,res)=>{
    clientData = req.body
    
    Client.findOne({_id: clientData._id},(error,client)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(client)
        }
    })
})


router.post('/listUserClients',(req,res)=>{
    clientData = req.body
    Client.find({userId: clientData._id},(error,userClients)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(userClients)
        }
    })
})


router.post('/addClient',(req,res)=>{
    let clientData = req.body
    let client = new Client(clientData)

    client.save(client,(error,createdClient)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(createdClient)
        }
    }) 
})



router.post('/updateClient',(req,res)=>{
    let clientData = req.body
    let clientToUpdate = new Client(clientData)

    Client.findOneAndUpdate({_id: clientToUpdate._id},clientToUpdate,{new: true},(error,updatedClient)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(updatedClient)
        }
    })
})


router.post('/deleteClient',(req,res)=>{
    let clientData = req.body

    Client.findOneAndDelete({_id: clientData._id},(error,deletedClient)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(deletedClient)
        }
    })
})





module.exports = router