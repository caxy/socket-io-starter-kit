'use strict';

import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';

let app = express();
let server = http.Server(app);
let io = new SocketIO(server);
let port = process.env.PORT || 3000;

app.use(express['static'](__dirname + '/../client'));

io.on('connection', (socket) => {
  socket.on('ping', () => {
    console.log("Pinged");
    socket.emit('pong');
  });
});

server.listen(port, () => {
  console.log('[INFO] Listening on *:' + port);
});