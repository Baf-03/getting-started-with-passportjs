import express from "express";
import { dashboardController, loginController, registerController } from "../controllers/index.js";
import { checkSchema } from "express-validator";
import { loginSchema, registrationSchema } from "../validationSchema.js";
import passport from "passport"
import { authMiddleware, validateRequest } from "../middlewares/index.js";
const router = express.Router();

router.get("/hello-world",(req,res)=>{
    res.sendStatus(200)
})

router.post("/api/auth/register",checkSchema(registrationSchema),registerController)

router.post("/api/auth/login", checkSchema(loginSchema), validateRequest, passport.authenticate("local"), loginController);

router.get("/api/dashboard",authMiddleware,dashboardController);

router.get("/api/auth/discord",passport.authenticate("discord"))
router.get("/api/auth/discord/redirect",passport.authenticate("discord"),(req,res)=>{
    res.sendStatus(200)
})


export default router