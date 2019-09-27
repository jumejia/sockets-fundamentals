var socket = io();
var label = $('small');

var searcParams = new URLSearchParams(window.location.search);

if (!searcParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es requerido')
}

var escritorio = searcParams.get('escritorio');
console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', {
        escritorio: escritorio
    }, function(res) {
        if (res === 'No hay tickets') {
            alert(res);
            return;
        }

        label.text(res.numero);
    })
});