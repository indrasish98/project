import { DataTypes }  from 'sequelize';
import sequelize from '../config/db.js';

const RoomConfiguration = sequelize.define(
    'roomConfigurations',
    {
       projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      roomType: {
        type: DataTypes.STRING,
        allowNull : false
      },
      bedroomNumber: {
        type: DataTypes.INTEGER,
        allowNull : false
      },
      
      
    },
    {
      freezeTableName: true,
    },
  );

  export default RoomConfiguration;
  