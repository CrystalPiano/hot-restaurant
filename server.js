// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

class reservation {
    constructor(n, p, e, i) {
        this.name = n;
        this.phone = p;
        this.email = e;
        this.id = i;
    }
}

var reservations = null;
var waitlist = null;
var hitcount = 0;
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    hitcount++;
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
    hitcount++;
});

// Get Reservations
app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
    hitcount++;
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
    if (reservation.length > 5) {
        var newreservation = req.body;
        reservations.push(newreservation);
        res.json(newreservation);
    }
    else{
      console.log("reservations full, adding to wait list");
        var newwait = req.body;
        waitlist.push(newwait);
        res.json(newwait);
    }
});
app.get("/api/reservations", function(req, res){
  res.json(reservations);
});
app.get("/api/waitlist", function(req, res){
  res.json(waitlist);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});