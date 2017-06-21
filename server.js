const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();

// serve static contents
app.use(express.static('dist'));

// proxy api request
app.all("/api/*", (req, res) => {
    apiProxy.web(req, res, {
        target: 'http://92.222.84.152:8080/b2b-0.1.0'
    });
});

// fallback to index.html for SPA.
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(4200);
console.log("server is running on http://localhost:4200");