import { validationResult } from 'express-validator';

export const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next(); 
};


export const authMiddleware = (req,res,next)=>{
    if(req.isAuthenticated()){
        next()
    }
    return res.status(401).json({
        msg:"unAuth User",
        status:false,
        data:null
    }) 
}
