const express = require('express')
const bodyParser = require('body-parser')

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

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
    res.end('No PUT');
})
.delete((req, res, next) => {
    res.end('Deleting all data');
});

module.exports = dishRouter;