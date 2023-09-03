const http = require("http");
const formidable = require("formidable");
const fs = require("fs");


http.createServer((req, res) => {
    if(req.url == "/fileupload") {
        var form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            var oldPath = files.filetoupload.path;
            var newPath = "C:/Users/hp/OneDrive/Desktop/HTML Samples/JS Practice/node js/formidable/NodeJS Content/" + files.filetoupload.name;
            
            fs.rename(oldPath, newPath, (err) => {
                    res.write('File Uploaded');
                    return res.end();
            });    
        });
    }
    else {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }   
   })
   .listen(5000, () => {
    console.log("Server has been started..")
   });
