import { Server } from "socket.io";

export const initializeWebSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    console.log("New WebSocket connection");

    // Handle WebSocket events here
    socket.on("disconnect", () => {
      console.log("WebSocket disconnected");
    });
  });

  return io;
};