const notFound = (req, res) => {
  res.status(404).send({ message: "Route doess'not exit" });
};

module.exports = notFound;
