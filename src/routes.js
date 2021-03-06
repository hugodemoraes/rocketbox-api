const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

const routes = express.Router();

const BoxController = require("./controllers/BoxController");
const FileController = require("./controllers/FileController");

routes.get("/", (req, res) => {
  res.send("Hello Rocketbox API");
});
routes.get("/boxes/:id", BoxController.show);
routes.get("/boxes", BoxController.showAll);
routes.post("/boxes", BoxController.store);
routes.post(
  "/boxes/:id/files",
  multer(multerConfig).single("file"),
  FileController.store
);

module.exports = routes;
