const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

const authRoute = require('./routes/authRoute');
const todoRoute = require("./routes/todoRoute");
const adminRoute = require("./routes/adminRoute")
const {
  errorMiddleware,
  globalMiddleware,
} = require("./middlewares/todoMiddleware");
const { authMiddleware } = require("./middlewares/authMiddleware");

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(globalMiddleware);
app.use("/auth",authRoute);
app.use("/todo",authMiddleware, todoRoute);
app.use("/admin", authMiddleware, adminRoute);
app.use(errorMiddleware);

const uri =
  "mongodb+srv://shubhamrajpandey875:Pandey5raj@cluster0.4awp2nj.mongodb.net/To-DoDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => console.log("Database is running"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
