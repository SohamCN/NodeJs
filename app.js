const http = require('http');
const routes = require('./routes')

const server = http.createServer(routes); //a created server is stored in the constant server

server.listen(3000); // the listen method is called on the created server, and the server keeps on listening for requests on port 3000