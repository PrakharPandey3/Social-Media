import express from 'express';
import { registerUser, loginUser, getUser } from '../controllers/user.controllers.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';

const userRoutes = express.Router();

//register
userRoutes.post('/register', registerUser);
userRoutes.post('/login', loginUser);
userRoutes.get('/me', isAuthenticated, getUser);
// userRoutes.get('/logout')

export default userRoutes;