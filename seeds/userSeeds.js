const {User} = require("../models");
const userData = [
  {
    id: 1,
    username: "Joshua",
    email: "joshuajordyn@hotmail.com",
    password: "password",
  },
  {
    id: 2,
    username: "Bob",
    email: "name2@example.com",
    password: "password12345",
  },
  {
    id: 3,
    username: "Destroyer",
    email: "name3@example.com",
    password: "password12345",
  },
  {
    id: 4,
    username: "Sharon",
    email: "name4@example.com",
    password: "password12345",
  },
  {
    id: 5,
    username: "Bats",
    email: "name5@example.com",
    password: "password12345",
  },
];
const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});
  
module.exports = seedUsers;