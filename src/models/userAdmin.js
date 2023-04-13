import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js"

export const userAdmin = sequelize.define(
    "userAdmin",
    {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        user:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        }
    }
)
