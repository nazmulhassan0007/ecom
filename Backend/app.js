// configuring the server with third party middlewares
const express = require('express');
const cors = require('cors'); //CORS: Cross-origin Resource Sharing
const cookieParser = require('cookie-parser'); /// middleware for parsing cookies.

const app = express();
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'POST'],
};

app.use(cors(corsOptions)); // configuring cors middleware
app.use(express.json({limit: "16kb"})) // for working with request body.
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser()) // for working with cookies.

module.exports = app;