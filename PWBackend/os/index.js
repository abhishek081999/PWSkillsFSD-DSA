// OPERATING SYSTEM
// os.arch();
// os.freemem();
// os.totalmem();
// os.networkInterfaces();
// os.tmpdir();
// os.endianness();
// os.hostname();
// os.type();
// os.platform();
// os.release();


const os = require('os');

console.log("CPU Architecture: "+ os.arch());

console.log("free memory: "+ os.freemem());

console.log("Total memory: "+ os.totalmem());

console.log("Network interfaces: "+ JSON.stringify(os.networkInterfaces()));

console.log("OS default tempt dir: "+ os.tmpdir());

console.log("Endianness: "+ os.endianness());

console.log("Hostname: "+ os.hostname());

console.log("OS type: "+ os.type());

console.log("OS Platform: "+ os.platform());

console.log("OS Release: "+ os.release())