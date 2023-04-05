import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js"
import { product } from "./product.js";
export const category = sequelize.define(
    "category",
    {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    }
);

category.hasMany(product,{
    foreinkey: "category",
    sourceKey: "id"
})
product.belongsTo(category, {
    foreinkey: "category",
    targetId:"id"
})