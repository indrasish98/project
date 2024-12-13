import { Sequelize, DataTypes, Model }  from 'sequelize';
import sequelize from '../config/db.js';

const Employee = sequelize.define(
    'employees',
    {
      
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      solution : {
        type:DataTypes.STRING,
        allowNull : false
      },
      email : {
        type : DataTypes.STRING,
        allowNull : false
      },
      workPhone : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      mobile : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      communicationChannel : {
        type : DataTypes.STRING,
        allowNull : false
      },
      projectId : {
        type : DataTypes.INTEGER,
        allowNull : false
      }
     
      
    },
    {
      freezeTableName: true,
    },
  );

  export default Employee;
  