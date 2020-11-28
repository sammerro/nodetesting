const { response } = require('express');
const express = require('express');
const {readFile} = require('fs').promises;
const path = require('path')
const app = express();
let counter = 3;
app.get('/', (req, res) => {
    console.log("WTF?????")
    readFile("home.html", "utf8").then((result) => {
        counter++;
        res.send(result.split("</body>")[0] +  `<h2>counter: " ${counter} "</h2></body>`);
    }).catch((err) => {
        res.status(500).send('sorry, out ofss order');
    });
});

app.listen(process.env.PORT || 1212, ()=>console.log("AVAILABLE"));
