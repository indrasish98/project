import { Sequelize } from "sequelize";

const sequelize = new Sequelize('project', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' ,
    logging: false,
});

export default sequelize;