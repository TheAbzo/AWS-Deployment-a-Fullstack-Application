import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

// it uses the default value of database port
export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,

  dialect: "postgres",
  storage: ":memory:",
});
