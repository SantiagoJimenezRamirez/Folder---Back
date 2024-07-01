import { Sequelize } from 'sequelize';

const Connection = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USERNAME as string,
    process.env.DB_PASSWORD as string,
    {
      host: process.env.DB_HOST,
      dialect: 'mariadb',
      port: Number(process.env.DB_PORT),
    }
  );

export default Connection;
