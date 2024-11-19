// Importing the required core modules
const os = require('os');
const util = require('util');

// Displaying temporary directory
console.log("Temporary directory: " + os.tmpdir());

// Displaying platform (Operating System)
console.log("Platform: " + os.platform());

// Displaying OS release version
console.log("OS Release: " + os.release());

// Displaying system uptime in seconds
console.log("Uptime (in seconds): " + os.uptime());

// Displaying total system memory
console.log("Total Memory (in bytes): " + os.totalmem());

// Displaying free system memory
console.log("Free Memory (in bytes): " + os.freemem());

// Displaying information about CPUs
console.log("CPU Information: " + util.inspect(os.cpus()));

// Displaying network interfaces
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()));
