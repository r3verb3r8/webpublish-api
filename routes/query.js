const express = require("express");
const db = require("../db/db");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This could be a place for som instructions...");
});

router.get("/files", async (req, res, next) => {
  try {
    let results = await db.SIFile();
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/case", async (req, res, next) => {
  try {
    let results = await db.SICase();
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/document", async (req, res, next) => {
  try {
    let results = await db.SIDocument();
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/document/:id", async (req, res, next) => {
  try {
    let results = await db.SIDocumentID(req.params.id);
    res.json(results.recordsets[0]);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
