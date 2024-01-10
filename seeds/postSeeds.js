const sequelize = require("../config/connection");
const {Post} = require("../models");

const postData = [
    {
        title:"Why i love sql",
        text:"Its the best ever",
        user_id:1,
    },
    {
        title:"typescript",
        text:"typescript is so good",
        user_id:2,
    },
    {
        title:"react",
        text:"react is so much better than handlebars",
        user_id:3,
    },
    {
        title:"python",
        text:"I really hate python because of all the whitespacing",
        user_id:4,
    },
    {
        title:"c#",
        text:"I love c# because you have to define variable types",
        user_id:5,
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

// id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   text: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   user_id:{
//       type:DataTypes.INTEGER,
//       allowNull:false,
//       references: {
//           model:"user",
//           key:"id",
//       }
//   },
//   date_created: {
//       type:DataTypes.DATE,
//       defaultValue:sequelize.NOW
//   }