import mongoose from "mongoose";
const DB_URI="mongodb+srv://bilal:bilal@shopco.h9mg6.mongodb.net/?retryWrites=true&w=majority&appName=ShopCo"
export const connectDB = async()=>{
    try{
        await mongoose.connect(DB_URI);
        console.log("Db connected!")
    }
    catch(err){
        console.log("error connecting to db ",err)
    }

}