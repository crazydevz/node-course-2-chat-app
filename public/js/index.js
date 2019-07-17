var socket = io();  // browser will request the server to open up a web socket connection

socket.on('connect', function() {
    console.log('Connected to server');

    // socket.emit('createMessage', {
    //     from: 'someone',
    //     text: 'Hey there LOL!'
    // });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});