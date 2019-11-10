const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// DDEFINE MIDDLEWARE 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// DEFINE API ROUTES AND VIEW
app.use(routes);

// CONNECT TO MONGODB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

// DEFINE ANY API ROUTES BEFORE THIS RUNS
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// START THE API SERVER
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on PORT ${PORT}!`);
});
