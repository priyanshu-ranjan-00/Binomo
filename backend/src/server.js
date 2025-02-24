import dotenv from "dotenv";
import { createServer } from "http";
import app from "./app.js"; // Uncomment this line
import { connectDB } from "./config/db.js";
import { initializeWebSocket } from "./config/websocket.js";

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000;
const server = createServer(app); // Uncomment this line

const startServer = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    console.log("✅ MongoDB connected successfully");

    initializeWebSocket(server); // Initialize WebSocket
    console.log("✅ WebSocket server initialized");

    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error starting server:", error.message);
    process.exit(1);
  }
};

startServer();
