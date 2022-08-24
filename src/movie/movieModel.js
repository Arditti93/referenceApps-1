const mongoose = require("mongoose");
//organization or structure for a database 
//Essentially, it is a library that allows you to pass documents to a DBMS
//Mongoose is an Object Document Mapping
//defining the structure of your documents and the types of data you're storing
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  actor: {
    type: String,
    default: "Not Specified",
  },
});

const Movie = mongoose.model("Movie2", movieSchema);

module.exports = Movie; 

//Everything in Mongoose starts with a Schema. 
//Each schema maps to a MongoDB collection and 
//defines the shape of the documents within that collection.
