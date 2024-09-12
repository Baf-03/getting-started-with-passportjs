import passport from "passport";
import { Strategy } from "passport-local";
import userModel from "../model/index.js";

passport.serializeUser((user,done)=>{
    console.log("serializing user")
    done(null,user._id);
})

passport.deserializeUser(async(id,done)=>{
    console.log("deserilizing user")
    try{
        const userExist = await userModel.findById(id);
        if(!userExist) throw new Error("user not found");
        done(null,userExist)
    }catch(err){
        console.log(err);
        done(err,null);
    }
})

export default passport.use(
    new Strategy({usernameField:"email"},async(username,password,done)=>{
        try{
            const userExist = await userModel.findOne({email:username});
            if(!userExist) throw new Error("userNot Found");
            if(userExist.password!==password) throw new Error("invalid Credentials");
            done(null,userExist)
        }
        catch(err){
            console.log("err",err);
            done(err,null)
        }
    })
)