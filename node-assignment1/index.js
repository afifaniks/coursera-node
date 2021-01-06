const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promotionsRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const HOSTNAME = 'localhost';
const PORT = '3000';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

// ROUTES
app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promotions', promotionsRouter);

// STATIC URLs
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Express Server</h1></body></html>')

});

const server = http.createServer(app);
server.listen(PORT, HOSTNAME, () => {
    console.log(`Running Server @ http://${HOSTNAME}:${PORT}`)
})
