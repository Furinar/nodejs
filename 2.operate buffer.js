let buf = Buffer.from("hello world");
console.log(`output->buf`, buf);
console.log(`output->buf.toString()`, buf.toString());

buf[0]= 0x48; // 'H'
console.log(`output->buf modified`, buf);
console.log(`output->buf.toString() modified`, buf.toString());