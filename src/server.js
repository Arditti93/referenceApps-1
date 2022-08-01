const express = require("express");
const app = express();
const port = 5001;

app.use("/static", express.static("public")); 
// Add public folder to web server, access through /static

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
