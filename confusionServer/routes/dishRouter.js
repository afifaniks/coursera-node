const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/:dishId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send the data ' + req.params.dishId);
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name);
})
.put((req, res, next) => {
    res.end('Will update the dish: ' + req.body.name);
})
.delete((req, res, next) => {
    res.end('Will delete the dish: ' + req.body.name);
});

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all data');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT Operation not supported');
})
.delete((req, res, next) => {
    res.end('Deleting all data');
});

module.exports = dishRouter;