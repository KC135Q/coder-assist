const express = require("express");
const path = require("path");
const routes = require('./routes');
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(routes);
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

// app.get("/profile", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/profile.html"));
// });

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
