const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'aplication/json'});

    const user = {
        id : 123,
        name : 'Carlos'
    }

    res.write(JSON.stringify(user));

    /* res.setHeader('Content-Disposition','attachment; filename=usuario.csv');
    res.writeHead(200,{'Content-Type':'aplication/csv'});
    res.write('id,name\n123,Carlos\n456, Andrea'); */
    res.end();
}).listen(4500);