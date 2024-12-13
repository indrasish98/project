import { Sequelize, DataTypes, Model }  from 'sequelize';
import sequelize from '../config/db.js';

const Amenity = sequelize.define(
    'amenities',
    {
      
      projectId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      cctv: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
      },
      gymnesium : {
        type : DataTypes.BOOLEAN,
        defaultValue:false
      },
      security : {
        type : DataTypes.BOOLEAN,
        defaultValue:false
      },
      reflexologyPark : {
        type : DataTypes.BOOLEAN,
        defaultValue:false
      },
      gatedCommunity : {
        type : DataTypes.BOOLEAN,
        defaultValue:false
      },
      visitorParking : {
        type : DataTypes.BOOLEAN,
        defaultValue:false
      },
      landscapeGarden : {
        type : DataTypes.BOOLEAN,
        defaultValue:false
      },
      joggingTrack : {
        type : DataTypes.BOOLEAN,
        defaultValue:false
      },
      swimmingPool : {
        type : DataTypes.BOOLEAN,
        defaultValue:false
      },
      amphithetre : {
        type : DataTypes.BOOLEAN,
        defaultValue:false
      },
      indorGame : {
        type : DataTypes.BOOLEAN,
        defaultValue:false
      },
      acCommunityHall : {
        type : DataTypes.BOOLEAN,
        defaultValue:false
      },
      seniorCitizenSeatOut : {
        type : DataTypes.BOOLEAN,
        defaultValue:false
      },
      acCommunityHall : {
        type : DataTypes.BOOLEAN,
        defaultValue:false
      },
      
    },
    {
      freezeTableName: true,
    },
  );

  export default Amenity;
  