const os = require('node:os');

console.log(`Operating System Info:`);
console.log(`__________________________________`);

console.log(`Platform: ${os.platform()}`);
console.log(`Version: ${os.version()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`${os.hostname()} has been running for ${os.uptime() / 3600} hours`);