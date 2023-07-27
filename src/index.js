// Modules
const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

// Call express
const app = express();

// Set dotenv
dotenv.config();

// Set port number
const port = process.env.PORT || 5000;

// Set database connection
connectDB();

// Set middlewares
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(
  port,
  console.log(`Server started in ${process.env.NODE_ENV} mode on port ${port}.`)
);
