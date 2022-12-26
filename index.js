const express = require("express");
const app = express();
const port = process.env.PORT || 3000

const apiData = require("./data.json")

app.get('/', (req, res) => {
    res.send("hello i am live ");
})

app.get('/service', (req, res) => {
    res.send(apiData);
})



app.listen(port, () => {
    console.log("I am Live!")
})