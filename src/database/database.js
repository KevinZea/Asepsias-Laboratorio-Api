import Sequelize from "sequelize";
import { config } from "dotenv"
config()

const dbName = process.env.DBNAME
const password = process.env.DB_PASSWORD
const username = process.env.DB_USERNAME
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
export const sequelize = new Sequelize(
    dbName, // db name,
    username, // username
    password, //password
    
    {
      host: dbHost,
      dialect: "postgres",
      port: dbPort
      // pool: {
      //   max: 5,
      //   min: 0,
      //   require: 30000,
      //   idle: 10000,
      // },
      // logging: false,
    }
  );