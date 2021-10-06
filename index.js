//requireing express
const express = require("express");

//initializing express app
const app = express();

//specifying port to listen on localhost:9000
const port = 9000;

// API / URLS
app.get("/", (req, res) => {
    res.send("What do you want to learn about?");
});

app.get("/api/mustang", (req, res) =>{

    // call to db

    //return dummy data
    const cars = ["fact1", "fact2", "fact3", "fact4", "fact5", "fact6", "fact7", "fact8", "fact9", "fact10"];
    res.send(JSON.stringify(cars));
});

app.get("/api/porsche", (req, res) =>{

    // call to db

    //return dummy data
    const cars = ["fact1", "fact2", "fact3", "fact4", "fact5", "fact6", "fact7", "fact8", "fact9", "fact10"];
    res.send(JSON.stringify(cars));
});

// running the express http server on the port we specified
app.listen(port, () => {
    console.log ("listening on port", port);
});