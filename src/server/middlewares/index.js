module.exports = (app) => ([
  (req, res, next) => {
    req.Application = app;
    next();
  }
]);