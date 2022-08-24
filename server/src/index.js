const express = require("express");
const cors = require('cors')
const t9Words = require('./t9Words');

const app = express();
app.use(cors())

app.get("/", (req, res)=> {
  const { input } = req.query;
  const digits = String(input);

  const possibleWords = t9Words.letterCombinations(digits); 

  res.send(possibleWords);
});

app.listen(8000, () => {
  console.log("server started on port 8000");
});
