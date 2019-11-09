const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const kidSchema = new Schema({
    nickname: String,
    firstname: String,
    lastname: String,
    age: Number, 
    bio: String,
    hobbies: String,
    religion: String,
    likes: Array,
    allergies: Array,
    foodrestrictions: String,
    code: Number,
    profilelink:String,
   


    journalentries: Array,
    freenote: String,

    currentfamily: Number,
    fosterfamilies: [{type: Schema.Types.ObjectId, ref: 'ParentUser'}], //kids have a number of families
    
    
    currentcoins: { type: Number, default: 0 },
    allcoins: Number,
    goals: Array, //kids have a number of chores assigned to them
    rewards: Array,

    date: { type: Date, default: Date.now }
});



const KidUser = mongoose.model("KidUser", kidSchema);

module.exports = KidUser;

