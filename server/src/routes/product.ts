import { Router } from "express";
import { Controller } from "../controllers/Product_Controller";
const router = Router();

router.get("/products", Controller.getAllProduct);
router.post("/product", Controller.postProduct);
router.get("/product/:id", Controller.getOneProduct);
router.put("/product/:id", Controller.updateProduct);
router.delete("/product/:id", Controller.deletProduct);

export default router;
