require("dotenv").config();
const Sequelize = require("sequelize");


let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
  console.log("jaws");
} else {
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
