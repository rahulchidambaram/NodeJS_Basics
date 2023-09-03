//event in node js

// const fs = require("fs");

// var rs = fs.createReadStream("./home.txt")

// rs.on("open", () => {
//     console.log("Event received");
// });

//Create our own event :
const events = require("events");
const eventEmitter = new events.EventEmitter();

function eventHandler() {
    console.log("Event triggered & received");
}

eventEmitter.on("test", eventHandler);

setTimeout(() => {
    eventEmitter.emit("test");    
}, 3000);                           //event will be triggered after 3000 mili seconds ie 3 seconds



