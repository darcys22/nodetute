var net = require('net')

var server = net.createServer(function (socket) {
  date = new Date();
  console.log(date.getMonth());
  socket.write(date.getFullYear().toString());
  socket.write("-");
  socket.write(String("0" + (date.getMonth() + 1)).slice(-2));
  socket.write("-");
  socket.write(String("0" + date.getDate()).slice(-2));
  socket.write(" ");
  socket.write(String("0" + date.getHours()).slice(-2));
  socket.write(":");
  socket.write(String("0" + date.getMinutes()).slice(-2));
  socket.write("\n");
  socket.end();
});

server.listen(process.argv[2]);

