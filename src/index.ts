import express from "express";
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import { UserModel } from "./db";

mongoose.connect("mongodb+srv://abhijitam:yY9PI6KA3S2eXLGL@cluster0.wszla.mongodb.net/")

const app = express();
app.use(express.json())
const JWT_SECRET = "SECRET"

app.post("/api/v1/signup" , (req,res) => {
    const username  = req.body.username;
    const password = req.body.password;
    UserModel.create({
        username: username ,
        password : password
    })

    res.json({
        message : " user signed up"
    })
})

app.post("/api/v1/signin", (req,res) => {

})

app.post("/api/v1/content" , (req,res) =>{

})

app.get("/api/v1/content" , (req,res) =>{
    const content : await Content.find().populate({
        path : "userId" ,
        select: "username password"
    })
})

app.delete("/api/v1/content" , (req,res) => {

})

app.post("/api/v1/brain/share" , (req,res) => {

})

app.get("/api/v1/brain/:shareLink" , (req,res) => {

})

app.listen(3000)