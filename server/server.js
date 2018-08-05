const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const port = process.env.PORT||3000;
const publicPath = path.join(__dirname,'../public');
console.log(__dirname+'/../public');
console.log(publicPath);

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('New user connected');

  socket.emit('newEmail', {
    text:'Hi',
    from:'Tcs@gmail.com',
    createdAt:'23'
  });

  // socket.emit('newMsg',{
  //   from:'Haha',
  //   text:'Mine',
  //   createat:'123'
  // });



  socket.on('createEmail',(newEmail)=>{
    console.log('New mail',newEmail);

  });

  socket.on('createMsg',(msg)=>{
    console.log('Msg',msg);
    io.emit('newMsg',{
      from:msg.from,
      text:msg.text,
      time:new Date().getTime()
    });
  });

  socket.on('disconnect',()=>{
    console.log('User Disconnected');
  });
});

server.listen(port,()=>{
  console.log(`Server running on port ${port}`);
});
