const mongoose = require("mongoose");
//VinayakNikam

connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(console.log("Database is Connected"));
};

module.exports = connectDB;
