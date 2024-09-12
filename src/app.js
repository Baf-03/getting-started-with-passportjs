import express from "express";
import { connectDB } from "./connectDB.js";
import cookieParser from "cookie-parser";
import session from "express-session"
import router from "./routes/index.js";
import passport from "passport";
import "./strategies/localStrategies.js"

const app = express();
const PORT=3000;


connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(session({
    secret:"verySecret",
    resave:false,
    saveUninitialized:false
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(router)


app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})