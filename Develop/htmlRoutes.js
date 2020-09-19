const express = require('express');
const path = require('path');
const htmlRouter = express.Router();

htmlRouter.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

htmlRouter.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});



module.exports = htmlRouter;