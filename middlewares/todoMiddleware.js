exports.globalMiddleware = (req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] Method is ${req.method}, Path is ${
      req.path
    }, URL is ${req.url}`
  );
  next();
};

exports.routeMiddleware = (req, res, next) => {
  if (req.query.token == "123") {
    next();
  } else {
    res.status(401).json({
      Success: false,
      Message: "UnAuthorized",
    });
  }
};

exports.errorMiddleware = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    message: err.message,
  });
  next();
};
