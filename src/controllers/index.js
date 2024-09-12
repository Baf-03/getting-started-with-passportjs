import { validationResult } from "express-validator";
import userModel from "../model/index.js";

export const registerController = async (req, res) => {
  try {
    const val_result = validationResult(req);

    if (val_result.errors.length) {
      return res.status(400).json({
        data: null,
        status: false,
        errors: [...val_result.errors],
      });
    }
    const { name, email, password } = req.body;
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(401).json({
        data: null,
        status: false,
        errors: "email already taken",
      });
    }
    const newUser = new userModel({ email, name, password });
    await newUser.save();

    //req.login() is a Passport.js method that logs the user in and establishes a session. It does so by serializing the user’s ID and saving it in the session.
    
    //Once the user is logged in, they can immediately access routes that require authentication, like a dashboard, without needing to manually log in again.
    req.login(newUser, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error logging in after signup" });
      }
      res
        .status(201)
        .json({ message: "User registered and logged in", user: newUser });
    });
  } catch (err) {
    res.status(500).json({ message: "Error signing up", error: err.message });
  }
};

export const loginController =  async(req,res)=>{
    res.json({
        status:true
    })
}

export const dashboardController = async(req,res)=>{
  res.json({
    status:true,
    data:"oyes"
  })
}