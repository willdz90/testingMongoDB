// -----------SIN UTILIZAR EXPRESS-----------------------
// const http = require('http');

// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type' : 'application/json'});
//     response.end(JSON.stringify(notas));
// })

require('dotenv').config();
const server = require('./src/app.js');
const { PORT } = process.env;

server.listen(PORT || 3001, () => {
    console.log('Server running on PORT :>> ', PORT);
})