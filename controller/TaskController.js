exports.getAllTask = (req, res) => {
  res.send("here is all your tasks");
};

exports.gerSingleTask = (req, res) => {
  res.send("here is single tasks");
};

exports.createTask = (req, res) => {
  res.json(req.body);
};

exports.updateTask = (req, res) => {
  res.json({ id: req.params.id });
};

exports.deleteTask = (req, res) => {
  res.json({ id: req.params.id });
};
