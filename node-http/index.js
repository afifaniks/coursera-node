const http = require('http')
const fs = require('fs');
const path = require('path')
const hostName = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("REQ: " + req.url + " METHOD: " + req.method);

    if (req.method == 'GET') {
        var fileURL;

        if (req.url == '/') fileURL = '/index.html';
        else fileURL = req.url;

        let filePath = path.resolve('./public' + fileURL);

        const fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>File Not FOund</h1></body></html>')

                    return;
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Not HTML</h1></body></html>')

            return; 
        }

    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Not supported</h1></body></html>')

        return;
    }
});

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}`)
})