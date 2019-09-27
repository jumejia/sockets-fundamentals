var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('conected to the server');
});


socket.on('estadoActual', function(res) {
    console.log(res.actual);
    label.text(res.actual);
})

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(ticket) {
        console.log(ticket);
        label.text(ticket);
    });

});