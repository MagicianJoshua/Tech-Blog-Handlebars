const seedUsers = require("./userSeeds");
const seedPosts = require("./postSeeds")
const sequelize = require("../config/connection");
const commentSeed = require("./commentSeed");

const seedAll = async() => {

    await sequelize.sync({force:true});
    await seedUsers();
    await seedPosts();
    await commentSeed();
    console.log("Database seeded");
    process.exit(0);
}

seedAll();