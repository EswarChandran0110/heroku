import express from "express";
import {User} from "../models/users.js";
const userRouter =  express.Router();
userRouter.get("/",async(request,respone)=>{
    const users = await User.find();
    // console.log(users);
    respone.send(users);
});
userRouter.get("/:id",async(request,respone)=>{
    //  const id = request.params.id;
     const {id} = request.params;
    // const user =  USERS.find(data => data.id === id);
    const user = await User.findById(id)
    respone.send(user);
});
// add users
userRouter.post("/", async(request,respone)=>{
    const addUser = request.body;
    // console.log(addUser);
    // USERS.push(addUser);
   // posting data without validation when there is no need for validation
    // const user = new User(addUser)

    //posting data with validation
    const user = new User ({
        id: addUser.id,
        avatar: addUser.avatar,
        createdAt: addUser.createdAt,
        name: addUser.name,
    });
    try{
        const newUser = await user.save();
        respone.send(newUser);
    }catch(err){
        respone.status(400);
        respone.send(err);
    }
});

 //Deleting the data from DB
 userRouter.delete("/:id",async(request,respone)=>{
     const {id} = request.params;
    // const user = await User.findOne({id: id})
    try{
        const user = await User.findById(id);
        await user.remove();
        console.log(user);
        respone.send({...user, message:"Deleted Successfully"});
    }catch(err){
        respone.status(500);
        respone.send("user is missing");
    }
    
});
userRouter.patch("/:id",async(request,respone)=>{
    const {id} = request.params;
    const {name, avatar} = request.body;
    try{
        const user = await User.findById(id);
        if(name){
            user.name = name;
        }
        if(avatar){
            user.avatar = avatar;
        }
        await user.save();
       respone.send(user);
    }catch(err){
        respone.status(500);
        respone.send(err);
    }
 
});

export default userRouter ;