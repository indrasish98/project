import { Sequelize, DataTypes, Model }  from 'sequelize';
import sequelize from '../config/db.js';

const RoomConfiguration = sequelize.define(
    'roomConfigurations',
    {
       projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      roomType: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bedroomNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
      
    },
    {
      freezeTableName: true,
    },
  );

  export default RoomConfiguration;
  