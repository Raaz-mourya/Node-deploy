const fs = require("fs");
const path = require('path');
const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data.json"), "utf-8")
);
const users = data.users;

exports.createUser = (req, res) => {
  console.log(req.body);
  users.push(req.body);

  res.status(201).json(req.body);
};

exports.getAllUser = (req, res) => {
  res.json(users);
};

exports.getUser = (req, res) => {
  const id = +req.params.id;
  const user = users.find((p) => p.id == id);
  res.json(user);
};

exports.replaceUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);

  users.splice(userIndex, 1, { ...req.body, id: id });
  const user = users[userIndex];

  res.json(user);
};

exports.updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);

  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });

  res.json(users[userIndex]);
};

exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);

  const user = users[userIndex];
  users.splice(userIndex, 1);

  res.json(user);
};
