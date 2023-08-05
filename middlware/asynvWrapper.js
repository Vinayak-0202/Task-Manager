const asyncWrapper = (fun) => {
  return async (req, res, next) => {
    try {
      await fun(req, res, next);
    } catch (Error) {
      next(Error);
    }
  };
};

module.exports = asyncWrapper;
