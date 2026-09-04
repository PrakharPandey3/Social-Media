import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { genToken } from '../utils/generateToken.js';

//Register Controller
const cookiesOptions = {
    httpOnly: true,
    secure: true
}

export const registerUser = async (req, res)=>{
    try {
        const {name, email, username, password} = req.body;

        //all fields present
        if(!username || !email || !password || !name){
            return res.status(400).json({message: "All fields required"});
        }

        //password should be > 6 characters
        if(password.length < 6){
            return res.status(400).json({message: "Password length is < 6"});
        }

        //if email or username already exists or not
        const userNameExists = await User.findOne({username});
        const emailExists = await User.findOne({email});

        if(userNameExists){
            return res.status(409).json({message: "User already exists"});
        }
        if(emailExists){
            return res.status(409).json({message: "Email already exists"});
        }

        //Password Security
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);        

        const newUser = await User.create({
            name, username, email, password: hashedPassword
        });

        //jwt token - access token
        const token = genToken(newUser._id);
        res.cookie("token", token, cookiesOptions);
        

        res.status(201).json({message: "User Registered", user: newUser});


    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error: error});
    }
}

//Login Controller
export const loginUser = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({message: "User Not Found"})
        }
        
        const passwordCheck = await bcrypt.compare(password, user.password);
        console.log(passwordCheck)

        if(!passwordCheck){
            return res.status(400).json({message: "Wrong Password"});
        }

        const token = genToken(user._id);
        res.cookie("token", token, cookiesOptions);

        res.status(200).json({message: "User Logged In"});

    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error: error});
    }
}

export const getUser = async (req, res)=>{
    res.status(200).json({message: "User Authenticated", userData: req.user});
}