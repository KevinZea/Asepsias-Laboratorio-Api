import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js"

export const product = sequelize.define(
    "product",
    {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        title:{
            type: DataTypes.STRING,
        },
        description:{
            type: DataTypes.TEXT
        },
        image:{
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.INTEGER
        },
        certification:{
            type: DataTypes.STRING
        }
    }
)