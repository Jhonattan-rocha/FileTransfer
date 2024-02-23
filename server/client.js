import io from 'socket.io-client';

let HOST = "127.0.0.1"
let PORT = 8080

// URL do servidor Socket.IO
const serverURL = `http://${HOST}:${PORT}`; // Substitua pelo seu URL do servidor

// Conecta-se ao servidor Socket.IO
const socket = io(serverURL);
// Evento de conexão bem-sucedida
socket.on("connect", (e) => {
    console.log(e);
    console.log("Conectado ao servidor Socket.IO");
    // Envia uma mensagem para o servidor
    socket.emit("client_message", "Olá, servidor!");
});

socket.emit("message", "nada")