let buf = Buffer.alloc(10);
console.log(`output->buf`, buf);


let buf2 = Buffer.allocUnsafe(10);
console.log(`output->buf2`,buf2)

let buf3 = Buffer.from("hello");
console.log(`output->buf3`,buf3)