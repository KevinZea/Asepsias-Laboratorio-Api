import Sequelize from "sequelize";
import { config } from "dotenv"
config()

const dbName = process.env.DBNAME
const password = process.env.DB_PASSWORD
export const sequelize = new Sequelize(
    dbName, // db name,
    "postgres", // username
    password, // password
    {
      host: "localhost",
      dialect: "postgres",
      // pool: {
      //   max: 5,
      //   min: 0,
      //   require: 30000,
      //   idle: 10000,
      // },
      // logging: false,
    }
  );