var buf = Buffer.alloc(10);
buf.write('hello');
console.log(buf);
console.log(buf.toString());

var buf02 = Buffer.from('welcome');
var a = buf02.toString();
console.log(a);
