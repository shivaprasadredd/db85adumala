const mongoose = require("mongoose") 
const LionSchema = mongoose.Schema({ 
 name: String, 
 age: Number, 
 weight: Number 
}) 
 
module.exports = mongoose.model("Lion", 
LionSchema) 