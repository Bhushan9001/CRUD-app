const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');

const userSchema = new mongoose.Schema({

  email : {
    type:String,
    required:true,
    unique:true
  },
  hash_password:{
    type:String,
    required:true
  }

},{timestamps:true});

// userSchema.virtual('password').set(
//   (password)=>{
//     this.hash_password = bcrypt.hashSync(password,10);
//   }
// )

userSchema.methods ={
  authenticate : function (pass){
        return bcrypt.compare(pass,this.hash_password);
  }
}

module.exports = mongoose.model("user",userSchema);