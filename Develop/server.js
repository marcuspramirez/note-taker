const express = require('express');
const path = require('path');
const fs = require("fs");


var app = express();
var PORT = process.env.PORT || 5000;
// route the sends the user to notes.html

var notesArray = [];


//express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// route to index
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/api/notes", function (req, res) {
    fs.readFile("db/db.json", "utf8", function (err, data) {

        console.log(data);

        res.json(JSON.parse(data));
    })


});

app.post("/api/notes", function (req, res) {
    //newNote = res.body
    var title = req.body.title;
    var text = req.body.text;
    var newNote = { title, text, id: uuidv1() }
    var pastNotes = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    pastNotes.push(newNote)

    fs.writeFileSync("db/db.json", JSON.stringify(pastNotes));

    res.json(newNote);

})


app.delete("/api/notes/:id", function (req, res) {
    var pastNotes = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    var updateNotes = pastNotes.filter(function (note) {
        return note.id !== req.params.id
    })
    fs.writeFileSync("db/db.json", JSON.stringify(updateNotes));
    res.json({ ok: true })
})



// listener function
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});











