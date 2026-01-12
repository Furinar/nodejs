const fs = require('fs');

fs.mkdir('./10test', err => {
    if (err)
    {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully');
});

fs.readdir('.', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log('Directory contents:', files);
});

fs.rmdir('./10test',{recursive: true}, err => {
    if (err)
    {
        console.error('Error removing directory:', err);
        return;
    }
    console.log('Directory removed successfully');  
});

//建议使用fs.promises.mkdir/fs.promises.rmdir等Promise版本的API来避免回调地狱，提高代码可读性。
