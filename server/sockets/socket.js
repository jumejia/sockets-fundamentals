const { io } = require('../server');

io.on('connection', (client) => {
    console.log('user conected');


    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Welcome!!'
    });


    client.on('disconnect', () => {
        console.log('user disconnected');
    });


    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);


        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'Todo bien'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'Todo mal'
        //     });
        // }
    });
})