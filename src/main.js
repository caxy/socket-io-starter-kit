'use strict';

import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';

let app = express();
let server = http.Server(app);
let io = new SocketIO(server);
let port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log("Connection");

  socket.emit('ding');

  socket.on('ding', () => {
    socket.emit('dong');
  });
});

server.listen(port, () => {
  console.log('[INFO] Listening on *:' + port);
});