const fs = require('fs');

fs.writeFile("./3.test.txt", "hello world", (err) => {
    if (err)
    {
        console.log(`output->`, err);
        return;
    }
    console.log(`output->`, "File written successfully")
})

//同步
fs.writeFileSync("./3.test2.txt", "hello world sync");

fs.appendFile("./3.test.txt", "\nappend content", (err) => {
    if (err)
    {
        console.log(`output->`, err);
        return;
    }
    console.log(`output->`, "File appended successfully")
});

// fs.appendFileSync

fs.writeFileSync("./3.test2.txt", "\nsync append content", {flag: 'a'})