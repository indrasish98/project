import {  DataTypes }  from 'sequelize';
import sequelize from '../config/db.js';

const PlanName = sequelize.define(
    'planNames',
    {
       projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      planName: {
        type: DataTypes.STRING,
        allowNull: false,
      }
      
    },
    {
      freezeTableName: true,
    },
  );

  export default PlanName;
  