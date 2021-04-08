// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/index", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/Unit1", (request, response) => {
  response.sendFile(__dirname + "/views/Unit1.html");
});
app.get("/Unit2", (request, response) => {
  response.sendFile(__dirname + "/views/Unit2.html");
});  
app.get("/Unit3", (request, response) => {
  response.sendFile(__dirname + "/views/Unit3.html");
});
app.get("/Unit4", (request, response) => {
  response.sendFile(__dirname + "/views/Unit4.html");
});
app.get("/Unit5", (request, response) => {
  response.sendFile(__dirname + "/views/Unit5.html");
});
app.get("/pset1", (request, response) => {
  response.sendFile(__dirname + "/views/pset1.html");
});
app.get("/pset2", (request, response) => {
  response.sendFile(__dirname + "/views/pset2.html");
});
app.get("/pset3", (request, response) => {
  response.sendFile(__dirname + "/views/pset3.html");
});
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
