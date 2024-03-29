const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({

    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users', 
        required: true
     },
    name:{
        type: String,
        unique: true,
        require:true
    },
    author:{
        type : String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true

    }
},{ timestamps: true });

module.exports = mongoose.model("Books", bookSchema);