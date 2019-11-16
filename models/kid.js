
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const kidSchema = new Schema({
    nickname: String,
    firstname: String,
    username: String,
    password: String,
    lastname: String,
    age: Number, 
    bio: String,
    hobbies: String,
    religion: String,
    likes: Array,
    allergies: Array,
    foodrestrictions: String,
    profilelink:String,

    journalentries: Array,
    freenote: String,

    currentfamily: Number,
    fosterfamilies: [{type: Schema.Types.ObjectId, 
        ref: 'ParentUser',
        default:undefined}], //kids have a number of families
    
    
    coinCount: { type: Number, default: 0 },
    goals: Array, //kids have a number of chores assigned to them
    rewards: Array,

    date: { type: Date, default: Date.now }
});




const KidUser = mongoose.model("KidUser", kidSchema);

module.exports = KidUser;

