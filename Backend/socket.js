// import { Server } from "socket.io";
// import { userModel } from "./models/user.model.js";
// import { captainModel } from "./models/captain.model.js";
// let io;
// export const initializeSocket = (server) => {
//   io = new Server(server, {
//     cors: {
//       origin: "*",
//       methods: ["GET", "POST"],
//       credentials: true,
//     },
//   });

//   io.on("connection", (socket) => {
//     console.log("Client connected:", socket.id);

//     socket.on("join", async (data) => {
//       const { userId, userType } = data;

//       if (userType === "user") {
//         await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
//       } else if (userType === "captain") {
//         await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
//       }
//     });

//     socket.on("update-location-captain", async (data) => {
//       const { userId, location } = data;

//       if (!location || !location.ltd || !location.lng) {
//         return socket.emit("error", { message: "Invalid location data" });
//       }

//       await captainModel.findByIdAndUpdate(userId, {
//         location: {
//           ltd: location.ltd,
//           lng: location.lng,
//         },
//       });
//     });
//     // console.log(io);

//     socket.on("disconnect", () => {
//       console.log("Client disconnected:", socket.id);
//     });
//   });
// };

// export const sendMessageToSocketId = (socketId, messageObject) => {
//   console.log(messageObject);

//   // console.log(io);
//   if (io) {
//     io.to(socketId).emit(messageObject.event, messageObject.data);
//   } else {
//     console.log("Socket.io not initialized.");
//   }
// };
import { createServer } from "http";
import app from "./app.js";

import { Server } from "socket.io";
import { userModel } from "./models/user.model.js";
import { captainModel } from "./models/captain.model.js";
const PORT = process.env.PORT || 3000;
export const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

let io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("join", async (data) => {
    const { userId, userType } = data;

    if (userType === "user") {
      await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
    } else if (userType === "captain") {
      await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
    }
  });

  socket.on("update-location-captain", async (data) => {
    const { userId, location } = data;

    if (!location || !location.ltd || !location.lng) {
      return socket.emit("error", { message: "Invalid location data" });
    }

    await captainModel.findByIdAndUpdate(userId, {
      location: {
        ltd: location.ltd,
        lng: location.lng,
      },
    });
  });
  // console.log(io);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

export const sendMessageToSocketId = (socketId, messageObject) => {
  console.log(messageObject);

  console.log(io);
  if (io) {
    io.to(socketId).emit(messageObject.event, messageObject.data);
  } else {
    console.log("Socket.io not initialized.");
  }
};
