import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username == '' || email == '' || password == '') {
        // return res.status(400).json({ message: 'All fields are required' });
        next(errorHandler(400,'All field are required'));
    }

    const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User({ username, email, password:hashedPassword })
    try {
        await newUser.save();
        res.status(200).json({ message: 'signin successful' })
    }
    catch (err) {
       next(err)
    };
}

export const singin = async(req,res,next)=>{
 const {email, password}=req.body;
 if(!email || !password || email === '' || password ===''){
    next(errorHandler(400,'All fields are required'));
 }
 try{
const validUser = await User.findOne({email})
if(!validUser){
    next(errorHandler(404, 'user not found'));
}
const validPassword = bcryptjs.compareSync(password,validUser.password);
 }
 catch(err){
next(err);
 }
}