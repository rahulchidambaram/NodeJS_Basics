const http = require("http");
const formidable = require("formidable");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.method.toLowerCase() === "post") {
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                return;
            }

            // The 'files' object contains information about the uploaded file
            const uploadedFile = files.uploadedFile;

            // Move the uploaded file to a desired location
            const newFilePath = __dirname + "/uploads/" + uploadedFile.name;
            fs.rename(uploadedFile.path, newFilePath, (renameErr) => {
                if (renameErr) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Error saving the file");
                    return;
                }

                res.writeHead(200, { "Content-Type": "text/html" });
                res.end("File uploaded successfully!");
            });
        });

        return;
    }

    // Return a simple HTML form for file upload
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <form action="/" method="post" enctype="multipart/form-data">
            <input type="file" name="uploadedFile">
            <input type="submit" value="Upload File">
        </form>
    `);
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});
