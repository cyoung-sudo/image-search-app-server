//----- Imports
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const helmet = require("helmet");

//----- Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());

//----- Routes
app.use(require("./routes/imageSearch"));
 
//----- Connection
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});