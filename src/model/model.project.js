import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Address from './model.address.js';
import Amenity from './model.amenity.js';
import ProjectDetail from './model.projectDetails.js';


const Project = sequelize.define(
  'projects',
  {
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  
    propertyType: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    
  }
);

Project.hasOne(Address);
Address.belongsTo(Project);

Project.hasOne(Amenity);
Amenity.belongsTo(Project);

Project.hasOne(ProjectDetail);
ProjectDetail.belongsTo(Project);


export default Project;
