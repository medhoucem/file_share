const mongoose = require("mongoose");


const dbUrl = "mongodb+srv://mydb:mydb@cluster0.nlhukkj.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dbUrl, {})
  .then(() => {
    console.log("Connected to MongoDB😎");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = mongoose;