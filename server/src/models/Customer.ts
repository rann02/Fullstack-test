import { Model, DataTypes } from "sequelize";
import sequelize from "./index";
import { Order } from "./Order";

export class Customer extends Model {
  declare id: number;
  declare name: string;
}

Customer.init(
  {
    name: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: "Customer",
  }
);

Customer.hasOne(Order);
Order.belongsTo(Customer);
