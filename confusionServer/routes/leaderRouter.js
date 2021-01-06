const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/:leaderId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send the data ' + req.params.leaderId);
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name);
})
.put((req, res, next) => {
    res.end('Will update the leader: ' + req.body.name);
})
.delete((req, res, next) => {
    res.end('Will delete the leader: ' + req.body.name);
});

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all data');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT Operation not supported');
})
.delete((req, res, next) => {
    res.end('Deleting all data');
});

module.exports = leaderRouter;