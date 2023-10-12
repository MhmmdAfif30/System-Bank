require("dotenv").config();
const express = require("express");
const app = express();
const {PORT} = process.env;
const v1Router = require('./routes/index');

app.use(express.json());
app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`Listening is running on port ${PORT}`);
});
