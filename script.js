let socket = io();

$('#inputbox').show();
$('#chatbox').hide();

$('#start').click(()=>{
  socket.emit('login',{password:$('#pswd').val(),name:$('#username').val()});
  $('#pswd').val()="";$('#username').val()="";
});

socket.on('chat',(data)=>{
  $('#inputbox').hide();
  $('#chatbox').show();
});
socket.on('failed',()=>{
  $('#inputbox').show();
  $('#chatbox').hide();  
});
$('#send').click(()=>{
    socket.emit('msgsent',{
    to:$('#touser').val(),
    msg:$('#msg').val()
  })
  $('#msg').val()="";
});
socket.on('msgrcvd',(data)=>{
    console.log(data.msg);
    let listele=document.createElement('li');
    listele.innerText= "[ "+data.from +" ]: "+data.msg;
    $('#listmsg').append(listele);
    $('#msg').val()="";
});
