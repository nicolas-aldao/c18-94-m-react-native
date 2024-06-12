const Router = require("express");
// const { Videocall } = require("../models/schemas");

const videocallRouter = Router();

videocallRouter.get("/", async (req, res, next) => {
  try {
    const videocallInfo = {
      appID: "9e59ec728ba649dcb247e112747bccea",
      channel: "call",
      token:
        "007eJxTYHgf4Mjj4DtVu1ph8u5SVSuhy0JX/G4+nGQj2VjCYnrEtFuBwTLV1DI12dzIIinRzMQyJTnJyMQ81dDQyNzEPCk5OTXxpFZWWkMgI8OxvkgGRigE8VkYkhNzchgYAIFtHSU=",
    };
    req.data = videocallInfo;
    req.statusCode = 200;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = videocallRouter;
