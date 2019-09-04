const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.send("Hello I am a supplier");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Hello my name is, ${id}`);
});

module.exports = router;
