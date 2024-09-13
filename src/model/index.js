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

const discordUserSchema = new mongoose.Schema({
    userName:{
        required:true,
        type:mongoose.Schema.Types.String,
        unique:true
    },
    discordId:{
        type:mongoose.Schema.Types.String,
        required:true,
        unique:true
    }
})

export const discordUserModel = mongoose.model("userDiscordXD",discordUserSchema);
export default userModel;

