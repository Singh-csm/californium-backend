const express = require("express");
const lodash = require("lodash");
const router = express.Router();
const welcome = require("../logger/logger.js");
const helper1 = require("../util/helper");
const formatter1 = require("../validator/formatter");
let chunk1 = require("../chunk");
let tail1 = require("../tail");
let union1 = require("../union");
let frompairs1 = require("../frompairs");
let api1 = require("../api");

router.get("/test-me", function (req, res) {
  console.log(welcome.initialfunction());
  console.log(helper1.date);
  console.log(helper1.Month);
  console.log(helper1.batchInfo);
  console.log(formatter1.greeting.trim());
  console.log(formatter1.greeting.toLowerCase());
  console.log(formatter1.greeting.toUpperCase());
  console.log(chunk1.month);
  console.log(tail1.myArray);
  console.log(union1.myArray2);
  console.log(frompairs1.myArray3);
  console.log(api1.myArray3);
  res.send(api1.myArray3);
  res.send("My first ever api!");
});

module.exports = router;
