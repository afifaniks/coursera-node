const express = require('express');
const bodyParser = require('body-parser');

const promotionsRouter = express.Router();

promotionsRouter.use(bodyParser.json());

promotionsRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send the data ' + req.params.promoId);
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name);
})
.put((req, res, next) => {
    res.end('Will update the promotion: ' + req.body.name);
})
.delete((req, res, next) => {
    res.end('Will delete the promotion: ' + req.body.name);
});

promotionsRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all data');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT Operation not supported');
})
.delete((req, res, next) => {
    res.end('Deleting all data');
});

module.exports = promotionsRouter;