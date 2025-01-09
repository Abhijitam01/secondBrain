import mongoose, { Mongoose } from "mongoose";
import {Model , Types} from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema ({
    username : {type: String , required:true , unique:true},
    password : {type : String , required : true}
})

const tagSchema = new mongoose.Schema({
    title : {type : String , required : true , unique : true}
})

const Tag = mongoose.model('Tag' , tagSchema);

module.exports = Tag ;

const contentTypes = ['image' , 'video' , 'audio' , 'article'];

const contentSchema = new Schema({
    link : {type: String , required : true},
    type : {type : String , enum : contentTypes , required : true},
    title : { type : String , required : true} ,
    tags : [{type : Types.ObjectId, ref:'Tag'}],
    userId : {type: Types.ObjectId , ref : 'User' , required:true}
});

const linkSchema = new mongoose.Schema({
    hash : {types:String , required: true},
    userId : {type:mongoose.Schema.Types.ObjectId, ref:'User' , required: true}
})



// contentSchema.pre('save' , async function(next){
//     const user = await User.findById(this.userId);
//     if(!user){
//         throw new Error('user does not exist');
//     }
//     next();
// });

export const UserModel = new Model(userSchema, "User");