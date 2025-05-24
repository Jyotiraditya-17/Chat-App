import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

const io = new Server( server , {
    cors : {
        origin : ['http://localhost:5173']
    }
});

export function getRecieverSocketId (userId) {
    return userSocketMap[userId];               // returns the socket id of the user
}


const userSocketMap = {};                     // used to store online users

io.on('connection' , (socket) => {
    console.log('A user connected..' , socket.id);

    const userId = socket.handshake.query.userId;
    if(userId) {
        userSocketMap[userId] = socket.id;
    }

    io.emit('getOnlineUsers' , Object.keys(userSocketMap));      // used to send events to all the connected clients

    socket.on('disconnect' , () => {
        console.log('A user disconnected..' , socket.id);
        delete userSocketMap[userId];                               // remove the user from the map when they disconnect
        io.emit('getOnlineUsers' , Object.keys(userSocketMap));     // update the online users list
    })
})

export  { io , app , server} 