const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); 
        });
        req.on('end', () => {
            const parsedData = querystring.parse(body); 

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1>POST Method is Processed</h1>');
            res.write('<h2>Received Data:</h2>');
            res.write(`<p>Name: ${parsedData.name}</p>`);
            res.write(`<p>Email: ${parsedData.email}</p>`);
            res.write(`<p>Age: ${parsedData.age}</p>`);
            res.write(`<p>Gender: ${parsedData.gender}</p>`);
            res.write(`<p>Branch: ${parsedData.branch}</p>`);
            res.write(`<p>Course: ${parsedData.course}</p>`);
            res.write(`<p>Password: ${parsedData.password}</p>`);
            res.write(`<p>Confirm Password: ${parsedData['confirm-password']}</p>`);
            res.end();
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/html' });
        res.write('<h1>Method Not Allowed</h1>');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});