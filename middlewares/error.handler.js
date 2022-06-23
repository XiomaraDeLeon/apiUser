const { ValidationError } = require("sequelize");

function logError(err, req, res, next) {
  console.log(err);
  next(err);
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
    return;
  }
  next(err);
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors,
    });
    return;
  }
  next(err);
}

module.exports = { logError, boomErrorHandler, ormErrorHandler };
