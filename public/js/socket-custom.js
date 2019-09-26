var socket = io();

socket.on('connect', function() {
    console.log('conected to the server');
});

//on recibir información
socket.on('disconnect', function() {
    console.log('disconected to the server');
});

//emit enviar información
socket.emit('enviarMensaje', {
    usuario: "Julian",
    mensaje: "Hola que mas"
}, function(res) {
    console.log('server response:', res);

});

//on recibir información
socket.on('enviarMensaje', function(mensaje) {
    console.log('server:', mensaje);
});