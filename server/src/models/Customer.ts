import { Model, DataTypes } from "sequelize";
import sequelize from "./index";
import { Cart } from "./Cart";
import { Order } from "./Order";

export class Customer extends Model {
  public name!: string;
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

Customer.hasMany(Order);
Customer.hasOne(Cart);
