var should = require('should');
var io = require('socket.io-client');

var socketURL = 'http://localhost:3000';

var options ={
  transports: ['websocket'],
  'force new connection': true
};

describe("Ping Pong",function(){

  /* Test 1  */
  it('Should receive a ding', function(done){
    var client = io.connect(socketURL, options);

    client.on('ding', () => {
      client.disconnect();
      done();
    });
  });

  /* Test 2 */
  it('Should return dong when dinged', function(done){
    var client = io.connect(socketURL, options);
    client.emit('ding');

    client.on('dong', () => {
      client.disconnect();
      done();
    });
  });
});