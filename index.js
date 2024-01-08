const express = require("express");
const app = express();
const path = require("path"); // built into node

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get('/', (req, res) => {
    res.render("home"); // evaluate the template
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random", { rand: num });
})

app.listen(3000, () => {
    console.log("App listening on port 3000");
})