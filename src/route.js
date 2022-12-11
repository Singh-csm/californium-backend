const express = require("express");
const router = express.Router();
let movies = require("./movies");
let films = require("./films");

router.get("/movies", function (req, res) {
  // console.log(api1.myArray3);
  res.send(movies.myArray3);
});

router.get("/movies/:indexNumber", function (req, res) {
  const indexNumber = req.params.indexNumber;
  // console.log(api1.myArray3);
  if (movies.myArray3[indexNumber] == undefined) {
    res.send("Error: please enter valid movie index");
  }
  res.send(movies.myArray3[indexNumber]);
});


router.get("/films", function (req, res) {
  // console.log(api1.myArray3);
  res.send(films.film1);
});



router.get("/films/:filmid", function (req, res) {
  const filmId =req.params.filmid;

  // const list = [
  //   {
  //     id: 1,
  //     name: "The Shining",
  //   },
  //   {
  //     id: 2,
  //     name: "Incendies",
  //   },
  //   {
  //     id: 3,
  //     name: "Rang de Basanti",
  //   },
  //   {
  //     id: 4,
  //     name: "Finding Nemo",
  //   },
  // ];

  if (films.film1[filmId] == undefined) {
    // res.send(list[filmId]);
    res.send("Error: No movie exists with this id");
  } else {
    // res.send("Error: No movie exists with this id");
    res.send(films.film1[filmId]);
  }
});

module.exports = router;

//const allTrue  = x.every(obj => obj.status === true)
//if(allTrue){
// call your method
//}
