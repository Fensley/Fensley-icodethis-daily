import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const userName = req.body["Fname"];
  res.render("receive.ejs", { userName });
  // console.log(req.body);
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log("server is opened");
});
