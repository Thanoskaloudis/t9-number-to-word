const express = require("express");
const cors = require("cors");
const fs = require("fs");
const t9Words = require("./t9Words");

const app = express();
app.use(cors())

const txtData = fs.readFileSync(`${__dirname}/dictionary.txt`, "utf8", (err, data) => {
  if (err) throw err;
  
  return data;
});
const possibleCombinations = txtData.toString().split('\n');

app.get("/", (req, res)=> {
  const { input } = req.query;
  const digits = String(input);

  const possibleWords = t9Words.letterCombinations(digits).filter(word => possibleCombinations.includes(word));

  res.send(possibleWords);
});

app.listen(8000, () => {
  console.log("server started on port 8000");
});
