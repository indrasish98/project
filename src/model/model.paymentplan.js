import {  DataTypes }  from 'sequelize';
import sequelize from '../config/db.js';

const PaymentPlan = sequelize.define(
    'paymentplans',
    {
       planNameId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      charge: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    },
    {
      freezeTableName: true,
    },
  );

  export default PaymentPlan;
  