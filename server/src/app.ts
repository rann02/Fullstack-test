import express from "express";
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import { Controller } from "./controllers/Product_Controller";

app.get("/products", Controller.getAllProduct);
app.post("/product", Controller.postProduct);
app.get("/product/:id", Controller.getOneProduct);
app.put("/product/:id", Controller.updateProduct);
app.delete("/product/:id", Controller.deletProduct);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
