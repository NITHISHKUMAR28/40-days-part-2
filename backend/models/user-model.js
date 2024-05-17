const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    mail:String,
    role:String,
    password:String
})

const UserModel=mongoose.model('login',userSchema)

module.exports=UserModel