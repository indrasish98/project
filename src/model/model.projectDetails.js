import {  DataTypes }  from 'sequelize';
import sequelize from '../config/db.js';

const projectDetail = sequelize.define(
    'projectDetails',
    {
       projectId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      room: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      floor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      areaDetail : {
        type : DataTypes.INTEGER,
        allowNull: false,
      },
      cost : {
        type : DataTypes.INTEGER,
        allowNull: false,
      },
      
      
    },
    {
      freezeTableName: true,
    },
  );

  export default projectDetail;
  