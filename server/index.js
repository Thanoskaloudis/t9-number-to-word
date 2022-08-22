const express = require("express");
const app = express();

app.get("/", (req, res)=> {
  const { input } = req.query;
  console.log(input); 
});

app.listen(8000, () => {
  console.log("server started on port 8000");
});
