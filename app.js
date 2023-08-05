require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middlware/notFound");
const errorHandler = require("./middlware/errorHandlerMidleware");

//middleware
app.use(express.static("./public")); //In order serve the static file
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task MannAer App");
});

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`server listening on port ${port}....`));
  } catch (err) {
    console.log(err);
  }
};
start();
