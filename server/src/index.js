const express = require("express");
const t9Words = require('./t9Words');

const app = express();

app.get("/", (req, res)=> {
  const { input } = req.query;
  console.log(input);

  const possibleWords = t9Words.letterCombinations("23")
  console.log(possibleWords);
});

app.listen(8000, () => {
  console.log("server started on port 8000");
});
