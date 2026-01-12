const fs = require('fs');

fs.rename('./3.test.txt', './3.renamed.txt', (err) => {
    if (err) {
        console.log(`output->err`, err);
        return;
    }
    console.log(`output->`, 'File renamed successfully');
});

fs.rename('./4.test.txt', './8.test/4.renamed.txt', (err) => {
    if (err) {
        console.log(`output->err`, err);
        return;
    }
    console.log(`output->`, 'File renamed successfully');
});