const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  console.log("notJawsDB");
  sequelize = new Sequelize(
    "TechBlog_db",
    "root",
    "2524",
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}
module.exports = sequelize;
