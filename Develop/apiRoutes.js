const express = require('express');
const apiRouter = express.Router();

// /api/notes
apiRouter.get('/notes', function(req, res){
    // How can I read from db.json convert string to real json and respond with that
    res.json([ {
        "title": "Test Title",
        "text": "Test text",
        "id": "1"
    }]);
});




module.exports = apiRouter;