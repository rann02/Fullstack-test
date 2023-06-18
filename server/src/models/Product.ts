import { Model, DataTypes } from "sequelize";
import sequelize from "./index";

export class Product extends Model {
  declare name: number;
  declare description: string;
  declare price: number;
  declare imageUrl: string;
}

Product.init(
  {
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    price: { type: DataTypes.NUMBER },
    imageUrl: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: "Product",
  }
);
