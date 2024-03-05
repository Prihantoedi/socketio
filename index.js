const express = require('express');
const { createServer } = require('node:http');

const app = express();

const server = createServer(app);
// const __dirname = 'pages/';

app.get('/', (req, res) => {
    // res.send('<h1>Hello World</h1>');
    console.log(__dirname);
    res.sendFile(__dirname + '\\pages\\index.html');
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});