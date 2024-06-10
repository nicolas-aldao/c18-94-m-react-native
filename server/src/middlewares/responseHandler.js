const responseHandler = (req, res, next) => {
  res
    .status(req.statusCode)
    .send({ data: Array.isArray(req.data) ? req.data : [req.data] });
};

module.exports = responseHandler;
