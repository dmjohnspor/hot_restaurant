// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tables (DATA)
// =============================================================
const reserved = [];
const waiting = [];

// Routes
// =============================================================
// HTML directory
const HTML_DIR = path.resolve(__dirname, "html");
const indexPath = path.join(HTML_DIR, "index.html");
const viewPath = path.join(HTML_DIR, "viewTables.html");
const resPath = path.join(HTML_DIR, "reservationPage.html");
const a = path.join(__dirname, "index.html")

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(indexPath);
});

app.get("/view", function (req, res) {
    res.sendFile(viewPath);
});

app.get("/res", function (req, res) {
    res.sendFile(resPath);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});