import {createServer} from "node:http";

const server= createServer((req, res)=> {
    console.log('request received');

    res.statusCode = 200;

    res.setHeader('Content-type', 'application/json');
    const jsonRes =  JSON.stringify({body: { location: "Mars" }})

    res.end(jsonRes)
})

server.listen(3000, ()=> {
    console.log('Server running at http://localhost:3000');
})