const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parentSchema = new Schema({
  firstname: { type: String, required: true },
  familyname: { type: String, required: true },
  occupation: String,
  usstate: String,
  username: String,
  password: String,
  phone: String,
  email: String,
  aboutfamily: String,
  aboutyou: String,
  welcome: String,
  rules: String,
  code: String,
  notifications: Array,
  fosterkids: [{
    type: Schema.Types.ObjectId, 
    ref: 'KidUser', 
    default:undefined 
  }],
  date: { type: Date, default: Date.now },
});



const ParentUser = mongoose.model("ParentUser", parentSchema);

module.exports = ParentUser;
