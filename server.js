const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const publicDirectory = path.join(__dirname, "public");

// Serve the complete website from /public, including its HTML, CSS, JavaScript, and images.
app.use(express.static(publicDirectory));


app.get("/", (req, res) => {
  res.redirect("/html/index.html");
});



app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})