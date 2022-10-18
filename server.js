//----- Imports
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const helmet = require("helmet");
const path = require("node:path");

//----- Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(express.static(path.join(__dirname, "client/build")));

//----- Routes
app.use(require("./routes/imageSearch"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
 
//----- Connection
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});