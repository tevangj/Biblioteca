import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const connection = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  databaseUrl: process.env.DATABASE_URL,
};

console.log(connection);

export default knex({
  client: 'pg',
  connection,
});