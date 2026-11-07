
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.redirect("/NotDonut");
});

app.get("/NotDonut", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/NotDonut/Store", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "store.html"));
});

app.get("/NotDonut/Stats", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "stats.html"));
});

app.get("/NotDonut/Leaderboard", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "leaderboard.html"));
});

app.get("/NotDonut/Staff", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "staff.html"));
});

app.listen(PORT, () => {
    console.log(`NotDonut website running on port ${PORT}`);
});
