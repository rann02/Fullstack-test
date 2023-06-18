import { Sequelize } from "sequelize";

const sequelize = new Sequelize("FullStackDB", "postgres", "postgres", {
  dialect: "postgres",
  // protocol: "postgres",
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false,
  //   },
  // },
});

export default sequelize;
