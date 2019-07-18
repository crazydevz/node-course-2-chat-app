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
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function() {

    });
});