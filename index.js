// var majorityElement = function(nums) {
//     const threshold = nums.length/2; // 1.5
//     const count = {};
//     for(num of nums){
//         count[num] = count[num] ? count[num] + 1: 1;
//         console.log(count, threshold)
//         if(count[num] > threshold ){
//             return num;
//         }
//     }
    
//     };
//     console.log(process.argv)
//     const nums = JSON.parse(process.argv[2]); 
//     console.log(process.argv[2], nums)
//     console.log("The majority is ", majorityElement(nums))
    
// const express = require("express");
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users.js";
import router from "./routes/recipe.js";
const app = express();
const PORT = process.env.PORT || 5000;;
const USERS = [{"id":"1","createdAt":"2021-06-09T06:54:25.501Z","name":"name 1","avatar":"https://cdn.fakercloud.com/avatars/scott_riley_128.jpg"},{"id":"2","createdAt":"2021-06-08T12:55:16.298Z","name":"name 2","avatar":"https://cdn.fakercloud.com/avatars/joemdesign_128.jpg"},{"id":"3","createdAt":"2021-06-08T12:11:15.672Z","name":"name 3","avatar":"https://cdn.fakercloud.com/avatars/plbabin_128.jpg"},{"id":"4","createdAt":"2021-06-09T04:16:01.656Z","name":"name 4","avatar":"https://cdn.fakercloud.com/avatars/seyedhossein1_128.jpg"},{"id":"5","createdAt":"2021-06-09T02:34:00.099Z","name":"name 5","avatar":"https://cdn.fakercloud.com/avatars/jamiebrittain_128.jpg"},{"id":"6","createdAt":"2021-06-08T18:24:59.986Z","name":"name 6","avatar":"https://cdn.fakercloud.com/avatars/bereto_128.jpg"},{"id":"7","createdAt":"2021-06-08T14:03:35.252Z","name":"name 7","avatar":"https://cdn.fakercloud.com/avatars/deeenright_128.jpg"},{"id":"8","createdAt":"2021-06-09T06:34:40.022Z","name":"name 8","avatar":"https://cdn.fakercloud.com/avatars/ovall_128.jpg"},{"id":"9","createdAt":"2021-06-08T08:30:17.227Z","name":"name 9","avatar":"https://cdn.fakercloud.com/avatars/imammuht_128.jpg"},{"id":"10","createdAt":"2021-06-08T22:37:58.697Z","name":"name 10","avatar":"https://cdn.fakercloud.com/avatars/faisalabid_128.jpg"},{"id":"11","createdAt":"2021-06-08T08:48:53.094Z","name":"name 11","avatar":"https://cdn.fakercloud.com/avatars/incubo82_128.jpg"},{"id":"12","createdAt":"2021-06-09T05:11:14.562Z","name":"name 12","avatar":"https://cdn.fakercloud.com/avatars/zaki3d_128.jpg"},{"id":"13","createdAt":"2021-06-08T16:37:59.535Z","name":"name 13","avatar":"https://cdn.fakercloud.com/avatars/coreyhaggard_128.jpg"},{"id":"14","createdAt":"2021-06-08T14:04:07.912Z","name":"name 14","avatar":"https://cdn.fakercloud.com/avatars/adamsxu_128.jpg"},{"id":"15","createdAt":"2021-06-15T07:26:23.598Z","name":"Chetan","avatar":"https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"},{"id":"16","createdAt":"2021-06-15T07:32:02.644Z","name":"Minian","avatar":"http://personal.psu.edu/xqz5228/jpg.jpg"}];

//mongodb database connection through mongoose
//connectionto Database MovieData
          // mongodb+srv://EswarChandran:<password>cluster0.vifem.mongodb.net/databaseName
const url = process.env.ui;
 //"mongodb+srv://EswarChandran:Lmceg@0110@cluster0.vifem.mongodb.net/movieData"
mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;
con.on("open",() => console.log("MongoDb is connected"))
// middleware
app.use(express.json());

app.get("/",(request,respone)=>{
    respone.send("welcome to node app!!!");
});





app.use("/users",userRouter);
app.use("/recipes", router);




app.listen(PORT,()=> console.log("the server is started"+ PORT));