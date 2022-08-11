const router = require("express").Router();

const charactersData = {
  1: { id: 1, firstName: "Ralph", lastName: "Woods" },
  2: { id: 2, firstName: "Ronnie", lastName: "Moore" },
  3: { id: 3, firstName: "Koko", lastName: "Kennedy" },
};

router
  .route("/characters")
  // to create new characters
  .post(function (req, res, next) {
    // Return our request body and return status OK
    res.json(req.body).status(200).send();
  })
  // to retrieve resource
  .get(function (req, res, next) {
    // Respond with some data and return status OK
    res.json(charactersData);
    res.status(200).send();
  });
router
  .route("/characters/:charId")
  // to retrieve a single resource
  .get(function (req, res, next) {
    const id = req.params.charId;
    if (id && charactersData[id]) {
      res.json(charactersData[id]);
      res.status(200).send();
    } else {
      // Not Found
      res.status(404).send();
    }
  });

module.exports = router;
