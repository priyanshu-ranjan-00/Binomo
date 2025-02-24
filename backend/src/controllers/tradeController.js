import Trade from "../models/Trade.js";

export const getTradeHistory = async (req, res) => {
  try {
    const trades = await Trade.find();
    res.status(200).json(trades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTrade = async (req, res) => {
  try {
    const trade = new Trade(req.body);
    await trade.save();
    res.status(201).json(trade);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
