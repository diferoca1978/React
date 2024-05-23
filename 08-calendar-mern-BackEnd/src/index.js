// import express from "express";
const express = require('express');
const dbConnection = require('./database/config');
require('dotenv').config();

// Raise the server
const app = express();

// DB connection
dbConnection();

// Public directory
app.use(express.static('public'));

// Read & Parse of the body
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Listening requests
app.listen(process.env.PORT, () => {
  console.log(`App running on ${process.env.PORT} port`);
});
