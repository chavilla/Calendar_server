const express = require("express");
require("dotenv").config();
const conn = require('../db/connection');

//app Express
const app = express();

// database conn
conn();

// bodyparser
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/authRouter"));

//listen
app.listen(process.env.PORT, () => {
  console.log(`Escuchando puerto ${process.env.PORT}`);
});
