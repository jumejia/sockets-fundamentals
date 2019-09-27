const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {
    console.log('user conected');

    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.siguiente();
        console.log(siguiente);
        callback(siguiente);
    });

    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimo4()
    });

    client.on('atenderTicket', (data, callback) => {

        if (!data.escritorio) {
            return callback({
                error: true,
                mensaje: 'el escritorio es necesario'
            })
        }

        console.log('solicitud del escritorio: ' + data.escritorio);


        let atenderTicket = ticketControl.atenderTicket(data.escritorio);

        callback(atenderTicket);

        //actualizar todas las pantallas aquí
        client.broadcast.emit('ultimos4', {
            ultimos4: ticketControl.getUltimo4()
        });
    });




})