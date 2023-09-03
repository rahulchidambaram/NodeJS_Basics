//Exporting a module from Date.js
// const { getDate } = require("./date");

// console.log(getDate());  


//check in browser : http://localhost:5000/

const { log } = require("console");
const http = require("http");
const url = require("url");

http.createServer((request, response) => {
    response.writeHead(200, {                              //To display HTML contents
        "Content-Type" : "text/html",
    });

    response.write("<h1 style='border:1px solid red'>Hello Folks!!</h1>")
    var q = url.parse(request.url, true).query;   //parsing url query
    console.log(q.year,q.month);
    console.log(request.url);
    response.end();
})
.listen(5000, () => {
    console.log("Server has been started...")
});