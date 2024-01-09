const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model:"user",
            key:"id",
        }
    },
    date_created: {
        type:DataTypes.DATE,
        defaultValue:sequelize.NOW
    }
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "posts",
  }
);

module.exports = Post;
