const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/app.js') {
    fs.readFile(path.join(__dirname, 'app.js'), (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading app.js');
      }
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      res.end(data);
    });
  } else {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
