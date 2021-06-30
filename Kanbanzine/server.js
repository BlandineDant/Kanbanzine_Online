var express = require('express');
var app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
let players = [];

app.use(express.static(__dirname + '/client'));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/index.html`);
})

//Connection 
io.on('connection', (socket) => {
    console.log('User  ' + socket.id + ' is connected.');

    players.push(socket.id);

    //affichier la carte à tous les joueurs
    socket.on('dealCards', function () {
        io.emit('dealCards');
    });

    //affichier le message à tous les joueurs
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    //joueur quitte la session
    socket.on('disconnect', () => {
        console.log('User ' + socket.id + ' is deconnected.');
        players = players.filter(player => player !== socket.id);
    });
});

server.listen(3000, () => {
    console.log('Ecoute sur le port 3000');
});