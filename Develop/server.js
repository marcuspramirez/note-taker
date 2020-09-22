require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require("fs");
const htmlRouter = require('./htmlRoutes');
const apiRouter = require('./apiRoutes');
const app = express();

const PORT = process.env.PORT;
// route the sends the user to notes.html

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));




app.use(htmlRouter);
app.use('/api',apiRouter);

app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`up on port: ${PORT}`)
})