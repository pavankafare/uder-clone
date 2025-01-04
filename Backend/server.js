import { createServer } from "http";
// import express from "express";
import app from "./app.js";
import { initializeSocket } from "./socket.js";

// const app = express();

const PORT = process.env.PORT || 3000;
const server = createServer(app);
initializeSocket(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
