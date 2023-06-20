import express from "express";
import ProductRoutes from "./product";
import OrderRoutes from "./order";
const router = express.Router();

router.use("/", ProductRoutes);
router.use("/", OrderRoutes);

export default router;
