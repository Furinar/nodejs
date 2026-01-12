const fs = require('fs');

fs.unlink('./3.renamed.txt', err => {
    if (err) {
        
    }
})

fs.rm('./3.test2.txt', err => {
    if (err) { }   
})

