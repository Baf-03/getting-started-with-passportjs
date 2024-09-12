import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email:{
        required:true,
        type:String
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model("userXD",userSchema);
export default userModel;