const fs = require("fs");


// To append or create a new file in file system in 3 ways

fs.appendFile("new.txt", "\n New I am a new file 2", (err) => 
{
    if (err) {
        console.log(err);
    }
    console.log("Saved")
});
 

//To open a file 
// fs.open("new1.txt", "w", (err) => 
// {
//     if (err) {
//         console.log(err);
//     }
//     console.log("Saved")
// });

//To replace the contents of a file 

// fs.writeFile("new1.txt", "I have replaced the contents", (err) => 
// {
//     if (err) {
//         console.log(err);
//     }
//     console.log("Saved")
// });

//To delete a file 

fs.unlink("new1.txt", (err) => 
{
    if (err) {
        console.log(err);
    }
    console.log("Deleted")
});

//To rename a file

fs.rename("new.txt", "home.txt", (err) => 
{
    if (err) {
        console.log(err);
    }
    console.log("Issue")
});