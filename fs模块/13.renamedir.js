const fs = require('fs');

const file = fs.readdirSync('./');

console.log(`output->file`, file)

file.forEach(item => {
    const [num, name, js] = item.split('.');
    if (num < 10)
    {
        const newName = `0${num}.${name}.${js}`;
        fs.renameSync(item, newName);
        console.log(`Renamed ${item} to ${newName}`);
    }
})