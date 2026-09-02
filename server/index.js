import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';

const app = express();
const PORT = 3333;
dotenv.config();

mongoose.connect(process.env.dbURL).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use('/users', userRoutes);

app.listen(PORT, ()=>{
    console.log(`Server Started at ${PORT}`);  
});