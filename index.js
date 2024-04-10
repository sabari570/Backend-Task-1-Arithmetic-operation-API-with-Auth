const express = require("express");
const authRoutes = require("./routes/auth-routes");
const operationRoutes = require('./routes/arithmetic-op-routes');
require('dotenv').config();

// Initialising the express app
const app = express();

const PORT = process.env.PORT || 3000;

// For accepting json requests
app.use(express.json());

// Listening to PORT
app.listen(PORT, () => console.log("SERVER CONNECTED AT PORT: ", PORT));

// To use the routes defined inside authRoutes
app.use('/api', authRoutes);
app.use('/api', operationRoutes);
