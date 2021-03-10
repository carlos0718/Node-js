const http = require('http');

http.createServer((req,res) => {
    console.log(req);
    res.writeHead(200);
    res.write('hola mundo');
    res.end();
}).listen(3000);