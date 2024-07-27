import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('library_management_dev', 'your-username', 'your-password', {
  host: '127.0.0.1',
  dialect: 'postgres'
});

export default sequelize;
