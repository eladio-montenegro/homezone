const mongoose = require("mongoose");
const db = require("../models");
const { Types: { ObjectId } } = mongoose;


// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const kidSeed = [
  {

    "nickname" : "Ver",
    "username": "v",
    "password": "password",
    "firstname" : "Veronica",
    "lastname" : "Hernandez",
    "fosterfamilies" : [ 
        "5dcb7aa8de999783141ff912"
    ]
},

/* 2 */
{
   
    "nickname" : "Javi",
    "firstname" : "Javier",
    "lastname" : "Cruz",
    "fosterfamilies" : [ 
        "5dcb7aa8de999783141ff913"
    ]
}
];

const parentSeed= [

  /* 1 */
{
 
  "firstname" : "Jennifer",
  "familyname" : "Ramos",
  "fosterkids" : [ 
      "5dcb7c2be29e574990b935f1"
  ]
},

/* 2 */
{

  "firstname" : "Eladio",
  "familyname" : "Montenegro",
  "fosterkids" : [ 
      "5dcb7c2be29e574990b935f2"
  ]
}


];

db.KidUser
  .remove({})
  .then(() => db.KidUser.collection.insertMany(kidSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  db.ParentUser
  .remove({})
  .then(() => db.ParentUser.collection.insertMany(parentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
