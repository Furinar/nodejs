const fs = require('fs');

fs.readFile('./3.test.txt', (err, data) => {
    if (err) {
        console.log(`output->err`,err)
        return;
    }
    console.log(`output->data`, data.toString());
})

// fs.readFileSync()

