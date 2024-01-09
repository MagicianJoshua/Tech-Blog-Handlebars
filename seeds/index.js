const seedUsers = require("./userSeeds");
const sequelize = require("../config/connection");

const seedAll = async() => {

    await sequelize.sync({force:true});
    await seedUsers();
    console.log("Database seeded");
    process.exit(0);
}

seedAll();