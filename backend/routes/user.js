const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
const UserModel=require('../models/user-model')

router.use(bodyParser.json())
router.get('/',(req,res)=>{
    res.send("Users page")
})

router.post('/post',(req,res)=>{
    console.log(req.body)
    const newUser=new UserModel(req.body)

    newUser.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("users post page")
})

router.get('/get/:mail',(req,res)=>{
    console.log(req.params.mail)
    UserModel.find({mail:req.params.mail})
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})


module.exports=router