import passport from "passport";
import { Strategy } from "passport-discord";
import env from "dotenv";
import { discordUserModel } from "../model/index.js";
env.config();



passport.serializeUser((user, done) => {
    console.log("serializing user", user._id);
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    console.log("deserializing user with id", id);
    try {
        const userExist = await discordUserModel.findById(id);
        if (!userExist) throw new Error("User not found");
        done(null, userExist);
    } catch (err) {
        console.log("Deserialization error:", err);
        done(err, null);
    }
});



export default passport.use(
    new Strategy(
      {
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecretID,
        callbackURL: "http://localhost:3000/api/auth/discord/redirect",
        scope: ["identify", "guilds", "email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log("userDetails", profile);
          const findUser = await discordUserModel.findOne({
            discordId: profile.id,
          });
          
          if (!findUser) {
            console.log("user exist nahi krta wah bhai")
            const newUser = new discordUserModel({
              userName: profile.username,
              discordId: profile.id,
            });
            const newSavedUser = await newUser.save();
            return done(null, newSavedUser); // Continue after saving new user
          }
          console.log("user exist krta hae")
          return done(null, findUser); // Continue when user exists
        } catch (err) {
          console.log(err);
          return done(err, null); // Handle errors
        }
      }
    )
  );
  
