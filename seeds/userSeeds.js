const User = require("../models/User");
const userData = [
  {
    id: 1,
    name: "Joshua",
    email: "joshuajordyn@hotmail.com",
    password: "password",
  },
  {
    id: 2,
    name: "Name2",
    email: "name2@example.com",
    password: "password12345",
  },
  {
    id: 3,
    name: "Name3",
    email: "name3@example.com",
    password: "password12345",
  },
  {
    id: 4,
    name: "Name4",
    email: "name4@example.com",
    password: "password12345",
  },
  {
    id: 5,
    name: "Name5",
    email: "name5@example.com",
    password: "password12345",
  },
];
const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});
  
module.exports = seedUsers;