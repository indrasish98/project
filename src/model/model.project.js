import { Sequelize, DataTypes, Model }  from 'sequelize';
import sequelize from '../config/db.js';

const Project = sequelize.define(
    'projects',
    {
      
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      
      displayCode: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      propertyType : {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    },
  );

  export default Project;
  