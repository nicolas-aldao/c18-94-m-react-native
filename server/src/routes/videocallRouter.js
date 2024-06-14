const Router = require("express");
// const { Videocall } = require("../models/schemas");

const videocallRouter = Router();

videocallRouter.get("/", async (req, res, next) => {
  try {
    const videocallInfo = {
      appID: "9e59ec728ba649dcb247e112747bccea",
      channel: "call",
      token:
        "007eJxTYFh783LiHXFfzX0x6SaKYRdNREOEDc4vZTzF21JjLhl6M0CBwTLV1DI12dzIIinRzMQyJTnJyMQ81dDQyNzEPCk5OTWxbUp2WkMgI0PB30esjAwQCOKzMCQn5uQwMAAAsGMeDA==",
    };
    req.data = videocallInfo;
    req.statusCode = 200;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = videocallRouter;
