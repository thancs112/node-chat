
var socket=io();
socket.on('connect',function (){console.log('server connected');
socket.emit('createEmail',{
  to:'1@g.com',
  text:'This s send'
});
// socket.emit('createMsg',{
//   to:'1@g.commsg',
//   text:'This s send msg'
// });
});
socket.on('disconnect',function (){console.log('disconnected from server');});
socket.on('newEmail',function(email){
  console.log('new mail',email);
});
socket.on('newMsg',function(msg){
  console.log('new Message',msg);
});
