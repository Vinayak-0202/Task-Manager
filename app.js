require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware

app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task MannAer App");
});

app.use("/api/v1/tasks", tasks);

const port = 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`server listening on port ${port}....`));
  } catch (err) {
    console.log(err);
  }
};
start();
