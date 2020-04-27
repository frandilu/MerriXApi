const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = process.env.PORT;

io.on("connection", socket => {
    console.log("a user connected :D");
    socket.on("chat message", msg => {
        console.log(msg);
        io.emit("chat message",msg);
    });
    socket.on("disconnect", r => {
        io.emit("chat message",["server","User disconnected"]);
    });
});

server.listen(port, () => console.log("server running on port:" + port));
