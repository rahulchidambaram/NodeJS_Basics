//To read a html file using Node JS and write using server

const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req, res) => {
    var q = url.parse(req.url, true);   //Adding another html file using URL
    var fileName = "." + q.pathname;
    console.log(fileName);


    fs.readFile(fileName, (err, data)=> {
        if(err) {
            res.writeHead(404, {
                "Content-Type" : "text/html"
            });
            return res.end("404 not found");
        }

        res.writeHead(200, {
            "Content-Type" : "text/html"
        });
        res.write(data);
        return res.end();
    })
}).listen(5000, () => {
    console.log("Server has been started..");
})