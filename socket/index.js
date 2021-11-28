const io = require('socket.io')(8900, {
  cors: {
    origin: "http://localhost:3000"
  },
});

io.on('connection', (socket) => {
  console.log('an user logged in')
  socket.on('disconnect', () => {
    console.log('Someone has left');
  });

})