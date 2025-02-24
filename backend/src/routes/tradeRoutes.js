import express from "express";
import {
  getTradeHistory,
  createTrade,
} from "../controllers/tradeController.js";

const router = express.Router();

router.get("/", getTradeHistory);
router.post("/", createTrade);

export default router;
