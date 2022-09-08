'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require("../helpers/bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task);
      User.belongsToMany(models.Project, {through: models.UserProjects, foreignKey: "UserId"});
    }
  }
  User.init({
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: {
        msg: "Username already Used"
      },
      validate: {
        notNull: {
          msg: "Username is required"
        },
        notEmpty: {
          msg: "Username is required"
        }
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: {
        msg: "Email already Used"
      },
      validate: {
        notNull: {
          msg: "Email is required"
        },
        notEmpty: {
          msg: "Email is required"
        },
        isEmail: {
          msg: "Input valid email"
        }
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Password is required"
        },
        notEmpty: {
          msg: "Password is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user, option) => {
    user.password = hashPassword(el.password);
  });
  
  return User;
};