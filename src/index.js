const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
const port = process.env.PORT || 3000;

app.listen(
  port,
  console.log(`Server started in ${process.env.NODE_ENV} mode on port ${port}.`)
);
