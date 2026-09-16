import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { genToken } from '../utils/generateToken.js';

// Cookie Options
const cookiesOptions = {
    httpOnly: true,
    secure: true
};

// Register Controller
export const registerUser = async (req, res) => {
    try {
        const { name, email, username, password } = req.body;

        // All fields present
        if (!username || !email || !password || !name) {
            return res.status(400).json({
                message: "All fields required"
            });
        }

        // Password should be > 6 characters
        if (password.length < 6) {
            return res.status(400).json({
                message: "Password length is < 6"
            });
        }

        // Check if email or username already exists
        const userNameExists = await User.findOne({ username });
        const emailExists = await User.findOne({ email });

        if (userNameExists) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        if (emailExists) {
            return res.status(409).json({
                message: "Email already exists"
            });
        }

        // Password Security
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            username,
            email,
            password: hashedPassword
        });

        // JWT Token - Access Token
        const token = genToken(newUser._id);

        if (!token) {
            return res.status(500).json({
                message: "Token generation failed"
            });
        }

        res.cookie("token", token, cookiesOptions);

        return res.status(201).json({
            message: "User Registered",
            user: newUser
        });

    } catch (error) {
        console.error("Register User Error:", error);

        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

// Login Controller
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        const passwordCheck = await bcrypt.compare(password, user.password);

        if (!passwordCheck) {
            return res.status(400).json({
                message: "Wrong Password"
            });
        }

        const token = genToken(user._id);

        if (!token) {
            return res.status(500).json({
                message: "Token generation failed"
            });
        }

        res.cookie("token", token, cookiesOptions);

        return res.status(200).json({
            message: "User Logged In",
            userData: user
        });

    } catch (error) {
        console.error("Login User Error:", error);

        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

// Get User Controller
export const getUser = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                message: "User Not Authenticated"
            });
        }

        return res.status(200).json({
            message: "User Authenticated",
            userData: req.user
        });

    } catch (error) {
        console.error("Get User Error:", error);

        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

