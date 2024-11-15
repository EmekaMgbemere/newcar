const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phoneNumber: String,
  password: String,
  streetAddress: String,
  preferredContactMethod: String,
  selectedLgas:String,
  state: String,
  selectedstate: String,
  privacyPolicy: Boolean, 
  location:String, 
  siteusertype:String,
  instagram:String,
  tiktok:String,
  facebook:String,
}, 
{
 modified_at:{type:Number,default:()=>Date.now()}
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;

