'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User);
      Task.belongsTo(models.Project);
      // define association here
    }
  }
  Task.init({
    ProjectId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: "ProjectId is required"
        },
        notEmpty: {
          msg: "ProjectId is required"
        }
      }
    },
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: "UserId is required"
        },
        notEmpty: {
          msg: "UserId is required"
        }
      }
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Status is required"
        },
        notEmpty: {
          msg: "Status is required"
        }
      }
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Task name is required"
        },
        notEmpty: {
          msg: "Task name is required"
        }
      }
    },
    deadline: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Deadline is required"
        },
        notEmpty: {
          msg: "Deadline is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};