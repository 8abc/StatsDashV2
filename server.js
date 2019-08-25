const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const search = require("./routes/api/search");
const app = express();


// app.use((req, res, next) => {
//   console.log("middle ware");
//   console.log(req.url);
//   next();
// });

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
// const db = require("./config/keys").mongoURI;
const db = "mongodb://localhost:27017/NBA";

// Connect to MongoDB
// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);


// app.use((rq, res) => {
//   res.status(404).send("bad");
// });

app.use("/api/search", search);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server Test up and running on port ${port} !`)
);
