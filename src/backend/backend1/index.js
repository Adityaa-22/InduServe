
import express from 'express';
import dotenv from "dotenv"
import connectDB from "./config/database.js";
import {login, logout, signup} from "./controller/usercontroller.js";


dotenv.config();




const app = express();


await connectDB();

app.use(express.json());

app.post("/login", login);
app.post("/logout", logout);
app.post("/signup", signup);



app.listen(7000, () => {
    console.log('Server is running on port 7000')
});