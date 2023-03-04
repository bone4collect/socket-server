const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {cors :{
    origin :"*",
    methods: ["GET", "POST"]
}});



io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("roomstatus", (data)=>{
    io.emit("send", data)
  })
});

server.listen(8081, () => {
  console.log('listening on *:8081');
});