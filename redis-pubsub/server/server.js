var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var redis = require('socket.io-redis');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.adapter(redis({ host: 'redis', port: 6379 }));

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

app.use("/static", express.static(__dirname + '/static'));

http.listen(3000, function () {
    console.log('listening on *:' + 3000);
});