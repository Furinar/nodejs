const fs = require('fs');

const rs = fs.createReadStream("./4.test.txt");

rs.on('data', (chunk) => {
    console.log(`output->chunk.length`,chunk.length)
})

rs.on('end', () => {
    console.log("read over");
})

fs.pipe(rs);
