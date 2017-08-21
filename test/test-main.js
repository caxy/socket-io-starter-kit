var should = require('should');
var io = require('socket.io-client');

var socketURL = 'http://localhost:3000';

var options ={
  transports: ['websocket'],
  'force new connection': true
};

describe("Ping Pong",function(){

  /* Test 1 - A Single User */
  it('Should return Pong when Pinged',function(done){
    var client = io.connect(socketURL, options);

    client.on('connect',function(data){

      console.log("Ping");
      client.emit('ping', function(d2) {
        console.log(d2);
      })
    });
  });
});