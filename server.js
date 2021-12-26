"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8080;

// mongoose.connect('mongodb://localhost:27017/dataDoc', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('Connected !'))
//     .catch((e) => console.error('Failed !' + e));

try {
  mongoose.connect(
    "mongodb://localhost:27017/dataDoc",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("connected")
  );
} catch (error) {
  console.log("could not connect" + error);
}

//connect mongo
// mongoose
//   .connect(
//     "mongodb://localhost:27017/data",
//     // 'mongodb://qasem:react@dimgo-shard-00-00.el27u.mongodb.net:27017,dimgo-shard-00-01.el27u.mongodb.net:27017,dimgo-shard-00-02.el27u.mongodb.net:27017/testmo?ssl=true&replicaSet=atlas-jiqoy7-shard-0&authSource=admin&retryWrites=true&w=majority'
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => {
//     console.log("connected");
//   })
//   .catch((err) => {
//     console.log(err);
//     process.exit();
//   });

app.use(cors());
app.use(express.json());

//require endpoint
const {
  getAllDataFromAPI,
  crateDataFAV,
  getAllDataFAv,
  updateDigmoFAv,
  deleteFAV,
} = require("./controllers/coffee.controller");

// routes
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/getData", getAllDataFromAPI);
app.get("/FAV", getAllDataFAv);
app.post("/createFAV", crateDataFAV);
app.put("/updateFAV/:id", updateDigmoFAv);
app.delete("/deleteFAV/:idx", deleteFAV);

app.listen(port, () => console.log(`server is running ob port ${port}`));
