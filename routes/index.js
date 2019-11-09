const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API ROUTES
router.use("/api", apiRoutes);

// IF NO API ROUTE IS HIT, RETURN  THE REACT APP
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;