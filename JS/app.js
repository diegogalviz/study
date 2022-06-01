// Esta palabra requiere en la equivalente al import en python

const math = require("./math.js")
const os = require("os");

// console.log(math.divide(5,2))
console.log(os.cpus())
console.log("memoria total",os.totalmem(), "bytes")
console.log("memoria libre", os.freemem(), "bytes")