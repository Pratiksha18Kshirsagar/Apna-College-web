const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new Schema({
  email:{
    type:String,
    required:true,
  }
})

userSchema.plugin(passportLocalMongoose);//automatically adds username and password fields in our schema !!

const User = new mongoose.model("User", userSchema);

module.exports = User;