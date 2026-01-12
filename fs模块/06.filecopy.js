const fs = require('fs');

let data =fs.readFileSync('./furina.jpg')
fs.writeFileSync('./furina_copy.jpg', data);

const rs=fs.createReadStream('./furina.jpg');
const ws = fs.createWriteStream('./furina_copy2.jpg');

rs.on('data', (chunk) => {
    ws.write(chunk);
})