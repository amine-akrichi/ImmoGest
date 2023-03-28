const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/',(req,res)=>{
    res.send("auth")
})

router.post('/login',(req,res)=>{
    userData = req.body
    User.findOne({username: userData.username},(error, user)=>{
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send('Invalid username')
            } 
            else {
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid password')
                }
                else{
                    res.status(200).send(user)
                }
            }
        }
    })
})


module.exports = router