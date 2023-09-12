const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

// Create a new express application instance
const app = express();

// DB Connection
dbConnection();

// CORS
app.use( cors() );

// Public directory
app.use(express.static('public'));

// Read and parse body
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// TODO: CRUD: Events


// Listen queries
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
