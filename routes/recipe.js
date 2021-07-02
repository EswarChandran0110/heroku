import express from "express";
import {Recipes} from "../models/Recipes.js";
import bcrypt from "bcrypt";
const router = express.Router();

router
.route("/").post( async(request,respone)=>{
    const addRecipe = request.body;
    // console.log(addRecipe);
    // USERS.push(addUser);
   // posting data without validation when there is no need for validation
    const recipe = new Recipes(addRecipe);

    //posting data with validation
    // const user = new User ({
    //     id: addRecipe.id,
    //     avatar: addRecipe.avatar,
    //     createdAt: addRecipe.createdAt,
    //     name: addRecipe.name,
    // });
    try{
        const newRecipe = await recipe.save();
        respone.send(newRecipe);
    }catch(err){
        respone.status(400);
        respone.send(err);
    }
}).get(async(request,respone)=>{
    const recipe = await Recipes.find();
    // console.log(users);
    respone.send(recipe );
});
router.get("/:id",async(request,respone)=>{
    //  const id = request.params.id;
     const {id} = request.params;
    // const user =  USERS.find(data => data.id === id);
    const recipe = await Recipes.findById(id)
    respone.send(recipe);
});

async function genHash(){
    const password = 'password@123';
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password,salt);
    console.log(salt,passwordHash);
}


genHash();


export default router;