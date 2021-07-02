import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    ings:[
        {
            type: String,
        }
    ],
    like:{
        type: Boolean,
        default: false,
    },
});

export const Recipes = mongoose.model("Recipe",recipeSchema);