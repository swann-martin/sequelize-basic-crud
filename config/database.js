// import sequelize
import { Sequelize } from 'sequelize';

const db = new Sequelize('sequelize_db', 'admin', 'password', {
  host: 'localhost',
  dialect: 'mariadb',
});

export default db;
