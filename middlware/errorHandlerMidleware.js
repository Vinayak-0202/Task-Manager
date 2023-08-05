const { CustomAPIError } = require("../errors/customError.js");
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({ message: "Something Went Wrong...." });
};

module.exports = errorHandler;
