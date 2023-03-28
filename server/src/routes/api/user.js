const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/',(req,res)=>{
    res.send('user')
})

router.post('/addUser',(req,res)=>{
    let userData = req.body
    let user = new User(userData)

    user.save(user, (error , createdUser)=>{
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(createdUser)
        }
    })  
})


router.post('/updateUser',(req,res)=>{
    let userData = req.body
    let userToUpdate = new User(userData)
    User.findOneAndUpdate({_id: userToUpdate._id},userToUpdate,{new: true},(error, updatedUser)=>{
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(updatedUser)
        }
    })
})


router.post('/deleteUser',(req,res)=>{
    let userData = req.body

    User.findOneAndDelete({username : userData.username},(error , deletedUser)=>{
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(deletedUser)
        }
    })
})



router.get('/listUsers',(req,res)=>{
    
    User.find((error , UsersList )=>{
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(UsersList)
        }
    })
})


module.exports = router
