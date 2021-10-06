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
    const cars = ["the first mustang was sold in 1964 and the name has stayed arround ever since, making it one of the longest running vehicle models", "22,000 mustangs were sold in the first day back in 1964", "ford has built over 10 million mustangs",  "the first mustang ever sold was actually a pre-production model sold to a canadian in newfoundland", "the 5.0L V8 is code named 'coyote' by ford", "the 'coyote' V8 is built in windsor ontario", "the largest mustang engine was 7.0L made back in 1969, it made only 375 horsepower. thats 85 less than the smaller, more modern 5.0L which makes 460 horsepower", "the most powerfull mustang was recently released. the updated gt500 which produces 760 horsepower from a supercharged 5.2L V8", "though the logo depicts a prancing horse, the mustang - similar to other classic american cars like the challenger and corvette - is actually named after an old WWII military vehicle", "the most expensive mustang - a 1967 gt500 super snake - was sold at auction for a staggering $2.2 million. thats an increase in value of 27,400% over the original price of %8,000"];
    res.send(JSON.stringify(cars));
});

app.get("/api/porsche", (req, res) =>{

    // call to db

    //return dummy data
    const cars = ["the porsche 911 was inspired by the VW beetle. both cars were designed by the same person; Ferdinand Porsche", "every single porsche 911 ever, has been built in the same factory in stuttgart, germany", "the stuttgart factory produces an estimated 110 911s per day", "the porsche 911 uses a flat 6 engine, which contains 2 banks of horizontally opposed pistons that rotate a central crankshaft. the firing action mimcs that of a punch, so flat engines have been dubbed boxers", "along with their success in road racing, the porsche 911 used to also be used as an offroad rally car", "the high-performance model of the 911 - the GT2 RS - holds one of the fastest Nürburgring lap times ever", "there are 24 different variants you can option your own porsche 911 in", "the porsche 911 took 5th place in the top cars of the 20th century", "the turbo s variant of the 911 will launch you to 100km/h in just ~2.8 seconds", "the porsche 911 is the most popular mass produces sports car in the world"];
    res.send(JSON.stringify(cars));
});

// running the express http server on the port we specified
app.listen(port, () => {
    console.log ("listening on port", port);
});