const fs = require('fs');

fs.stat('./furina.jpg', (err, stats) => {
    if (err) {
        console.error('Error getting file status:', err);
        return;
    }
    console.log(`output->`, stats);
    console.log('Is file:', stats.isFile());
    console.log('Is directory:', stats.isDirectory());
});