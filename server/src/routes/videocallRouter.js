const Router = require("express");
// const { Videocall } = require("../models/schemas");

const videocallRouter = Router();

videocallRouter.get("/", async (req, res, next) => {
  try {
    const videocallInfo = {
      appID: "9e59ec728ba649dcb247e112747bccea",
      channel: "call",
      token:
        "007eJxTYIgvEJ1cUrg6V53ryKqvW0oWyjUsTr99NSvL5ZvI+eZnbg0KDJapppapyeZGFkmJZiaWKclJRibmqYaGRuYm5knJyamJqmY5aQ2BjAzpb2QZGRkgEMRnYUhOzMlhYAAAbBcfmg==",
    };
    req.data = videocallInfo;
    req.statusCode = 200;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = videocallRouter;
