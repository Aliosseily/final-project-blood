var express = require('express');
var socket = require('socket.io');
// var cors = require('cors');

// const sqlite3 = require('sqlite3').verbose();

// let db = new sqlite3.Database('blooddonation.db', sqlite3.OPEN_READWRITE, (err) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('Connected to the mydatabase SQlite database.');
// });


var app = express();
// app.use(cors());

server = app.listen(8080, function () {
    console.log('server is running on port 8080')
});


io = socket(server);


const person = [
    { id: '0', name: 'ali'  , bloodtype: 'A+' , bloodunits: "3", hospital: "hopital", address: "sarafand", phone: "71186507" },
    { id: '1', name: 'ahmad', bloodtype: 'A+' , bloodunits: "2", hospital: "hopital", address: "beirut", phone: "70996284" },
    { id: '2', name: 'jad'  , bloodtype: 'AB+', bloodunits: "1", hospital: "hopital", address: "jdaydeh", phone: "03578416" },
    { id: '3', name: 'amr'  , bloodtype: 'AB+', bloodunits: "4", hospital: "hopital", address: "bshamoon", phone: "71834510" },
    { id: '4', name: 'saleh', bloodtype: 'A+' , bloodunits: "2", hospital: "hopital", address: "beirut", phone: "79151332" }
];

const personAccount = [
    {
        username: 'ali',
        password: 'a',
        bloodtype: 'A+',
    },
    {
        username: 'jad',
        password: 'a',
        bloodtype: 'AB+',
    },
];

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function (data) {
        console.log('SEND_MESSAGE', data)
        io.emit('RECEIVE_MESSAGE', data);
    })


    socket.on('REQUEST', function (data) {
        person.push(data)
        io.emit('REQUEST', data);
    })

    socket.emit('PREVIOUS_REQUESTS', person)

    socket.on('ACCOUNT', function (data) {
        personAccount.push(data)
        io.emit('ACCOUNT', data);
        console.log('account' + personAccount)
    })

    socket.emit('PREVIOUS_ACCOUNTS', personAccount)

    socket.on('DELETE', function (id) {
        console.log('id', id)

        const index = person.findIndex(person => person.id === id)
        if (index < 0) {
            return;
        }
        person.splice(index, 1);

        console.log(person)

        io.emit('DELETE', person);
    })


});