const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const dishRouter = require('./routes/dishRouter')

const hostName = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use('/dishes', dishRouter);


// app.get('/dishes/:dishId', (req, res, next) => {
//     res.end('Will send dish: ' + req.params.dishId);
// });

// app.post('/dishes/:dishId', (req, res, next) => {
//     res.statusCode = 403;
//     res.end('Not Supported');
// });

// app.put('/dishes/:dishId', (req, res, next) => {
//     res.write('Updating the dish: ' + req.params.dishId)
//     res.end('Will update dish: ' + req.body.name)
// });

// app.delete('/dishes/:dishId', (req, res, next) => {
//     res.end('Deleting dish: ' + req.params.dishId);
// });

// Serve static files
app.use(express.static(__dirname + '/public'))
app.use((req, res, next) => {
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Express Server</h1></body></html>')
});

const server = http.createServer(app);

server.listen(port, hostName, () => {
    console.log(`Running Server @ http://${hostName}:${port}`)
})