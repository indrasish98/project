import { DataTypes, DATE } from 'sequelize';
import sequelize from '../config/db.js';

const Project = sequelize.define(
  'projects',
  {
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    projectCode: {
      type: DataTypes.STRING,
      unique : true
    },
    propertyType: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    hooks: {
      beforeCreate: (project) => {
        let code = Date.now() +project.id;
        project.projectCode =  code.toString();
      }
    }
  }
);

export default Project;
