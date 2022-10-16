const buf1 = Buffer.alloc(10, '1');
const buf2 = Buffer.alloc(17, '2');

console.log(buf1.toString());
console.log(buf2.toString());

var result = buf1.compare(buf2);

if(result < 0){
	console.log(buf1 + " comes before " + buf2);
}
else if(result === 0){
	console.log(buf1 + " is equal " + buf2);
}
else if(result > 0){
	console.log(buf1 + " comes after " + buf2);
}