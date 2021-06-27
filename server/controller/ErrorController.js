const AppError = require('../utils/AppError');

const sendErrorProd = (err, res) => {
  if (!err.isOperational) {
    //programming or other unknown errors, don't leak details
    res.status(err.statusCode).json({
      status: err.status,
      message: 'Something Went Wrong',
    });
  } else {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
};

const sendErrorDev = (err, res) => {

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
};

const handlingCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 500;
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else {
    if (err.name === 'CastError') error = handlingCastErrorDB(error);
    sendErrorProd(err, res);
  }
};
