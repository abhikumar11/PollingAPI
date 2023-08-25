const mongoose = require("mongoose");
const Options = require('./option');

const questionSchema = new mongoose.Schema({
    title: {
         type: mongoose.Schema.Types.String,
         required: true,
         unique: true, 
    },
    options:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Option",
        },
    ],
});
const Question=mongoose.model("Question",questionSchema);
module.exports=Question;