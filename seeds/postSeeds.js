const sequelize = require("../config/connection");
const Post = require("../models/Post");

const postData = [
    {
        title:"Why i love sql",
        text:"Its the best ever",
        user_id:1,
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