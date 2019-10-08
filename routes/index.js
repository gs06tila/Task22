const express = require('express');
let router = express.Router();

function pet(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
}

var petData = new pet("Opsis Kalopsis", 10, "Grumpy Cat");

router.get("/", (req, res) => {
    console.log("Request for home recieved");
    res.render('index');
});

router.get("/info", (req, res) => {
    console.log("Request for info page recieved");
    res.render('info', petData);
});

router.get("/picture", (req, res) => {
    console.log("Request for picture page recieved");
    res.render('picture', petData);
});

router.get('/data', (req, res) => {
    res.json(petData);
})

module.exports = router;
