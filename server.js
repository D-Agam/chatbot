const http = require('http')
const express = require('express')
const app = express()
const socketio = require('socket.io')
const { Socket } = require('dgram')
const { log } = require('console')
let users={A:'A1234',B:'B1234',C:'C1234',D:'D1234',C:'E1234',};
let socketmap={};
const server = http.createServer(app)
const io = socketio(server)
io.on('connection',(socket)=>{
    console.log('Socket id : ',socket.id);
    socket.on('login',(data)=>{
        if(users[data.name])
        {
          if(users[data.name]==data.password)
          {
            socket.join(data.name);
            socket.emit('chat',data);
            socketmap[socket.id]=data.name;
          }
          else
          {
            socket.emit('fail');
          }
        }
        else
        {
          users[data.name]=data.password;
          socket.join(data.name);
          socket.emit('chat',data);
          socketmap[socket.id]=data.name;
        }
        
    });
    socket.on('msgsent',(data)=>{
      data.from=socketmap[socket.id];
      if(data.to || users[data.to])
      {
        io.to(data.to).emit('msgrcvd',(data));
      }
      else{
      socket.broadcast.emit('msgrcvd',(data));}
    });
    
});
app.use('/', express.static(__dirname + '/public'))

server.listen(3344, () => {
  console.log('Started on http://localhost:3344');
})
