import User from '../models/user.model.js';

//Register Controller
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

        const newUser = await User.create({
            name, username, email, password
        });

        res.status(201).json({message: "User Registered", user: newUser});


    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error: error});
    }
}