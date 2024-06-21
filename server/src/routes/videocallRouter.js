const Router = require("express");
// const { Videocall } = require("../models/schemas");

const videocallRouter = Router();

videocallRouter.get("/", async (req, res, next) => {
  try {
    const videocallInfo = {
      appID: "9e59ec728ba649dcb247e112747bccea",
      channel: "call",
      token:
        "007eJxTYAhYlimYsd7w3Jc/QZt/Tzj9MC7qs3jSk5Cd5svl3jtsrwpQYLBMNbVMTTY3skhKNDOxTElOMjIxTzU0NDI3MU9KTk5NjDtRmtYQyMigcvI1MyMDBIL4LAzJiTk5DAwAAVMiAg==",
    };
    req.data = videocallInfo;
    req.statusCode = 200;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = videocallRouter;
