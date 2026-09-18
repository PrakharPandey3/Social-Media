import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({ message: "Not Authorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({ message: "User not Found" });
        }

        req.user = user

        next();
    } catch (err){
        console.error('Authentication error:', err.message)

        return res.status(401).json({
            message: 'Invalid or expired authentication token'
        })
    }
}