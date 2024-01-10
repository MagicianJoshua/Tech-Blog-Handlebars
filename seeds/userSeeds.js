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
    username: "Name2",
    email: "name2@example.com",
    password: "password12345",
  },
  {
    id: 3,
    username: "Name3",
    email: "name3@example.com",
    password: "password12345",
  },
  {
    id: 4,
    username: "Name4",
    email: "name4@example.com",
    password: "password12345",
  },
  {
    id: 5,
    username: "Name5",
    email: "name5@example.com",
    password: "password12345",
  },
];
const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});
  
module.exports = seedUsers;