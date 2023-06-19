IN SERVER.JS 
SOCKET.ON AND IO.ON ARE EVENT LISTNERS

IO.ON HAS TWO PARAMETERS CONNECTION AND SOCKET INSTANCE SOOCKET INSTANCE IS DIFF FOR DIFF CONNECTIONS
It allows bidirectional communication between the server and the connected client.

SOCKET.IO SET UPS EVENT WHENEVER THE CLIENT HIT THE BOOM EVENT IT GET EXECUTED

The io object manages the overall server-side functionality of Socket.IO, including handling connections, events, and emitting data to connected clients. The socket object, on the other hand, represents an individual client socket connection and allows you to listen for events emitted by the client and send data back to that specific clienT

SOCKET.EMIT SENDS BACK TO SAME SOCKET 
SOCKET.BROADCAST.EMIT SENDS TO ALL OTHER SOCKET EXCEPT THIS ONE
IO.EMIT SENDS TO ALL SOCKETS IN CONNECTION

Rooms for creating groups of socket.id/user

![Rooms expl](image.png)