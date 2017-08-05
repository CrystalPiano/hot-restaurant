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

var hitcount = 0;
var reservations = [];
var waitlist = [];

var newguy = new reservation("testname", "124-4567", "email@email.com", "ID1234");
reservations.push(newguy);

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
    var newreservation = req.body;
    console.log(newreservation);
    console.log(reservations.length);
    var addme = new reservation(newreservation.customerName, newreservation.phoneNumber, newreservation.customerEmail, newreservation.customerID);
    if(newreservation.customerName == "Mark Techson" || "mark techson"){
        reservations[0] == addme;
    }
    if(reservations.length < 5) {
        console.log("before push: " + reservations);
        reservations.push(addme);
        console.log("after push: " + reservations);
        res.json(1);
       // res.json(newreservation);
    }
    else{
      console.log("reservations full, adding to wait list");
        waitlist.push(addme);
        res.json('');
       // res.json(newreservation);
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