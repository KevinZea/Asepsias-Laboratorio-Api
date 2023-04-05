import app from "./app.js";
import { sequelize } from "./database/database.js";
import { config } from "dotenv";
config()
const port = process.env.PORT

async function main() {
    await sequelize.sync({ force: true })
    app.listen(port);
    console.log("Server on port", port);
}

main();