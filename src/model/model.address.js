import { Sequelize, DataTypes, Model }  from 'sequelize';
import sequelize from '../config/db.js';

const Address = sequelize.define(
    'addresses',
    {
       projectId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      street1: {
        type: DataTypes.STRING,
        allowNull : false
      },
      street2: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
        allowNull : false
      },
      state : {
        type : DataTypes.STRING,
        allowNull : false
      },
      country : {
        type : DataTypes.STRING,
        allowNull : false
      }
      
    },
    {
      freezeTableName: true,
    },
  );

  export default Address;
  