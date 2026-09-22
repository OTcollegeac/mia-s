const express = require("express");
const path = require("path");
const fs = require('fs');
const { time } = require("console");
const app = express();
const port = 8080;
//const publicDirectory = path.join(__dirname, "public");
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
// Serve the complete website from /public, including its HTML, CSS, JavaScript, and images.
//app.use(express.static(publicDirectory));

// Keep the site root convenient while preserving the existing static-page URLs.
app.get("/", (req, res) => {
  const data = {
    message: 'test1234'
  }
  res.render('index', data)
});



app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})