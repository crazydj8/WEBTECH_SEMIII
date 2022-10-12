var fs = require('fs');
fs.readFile('test.txt', function(err, data){
    if(err){
        console.log(err);
    }
    setTimeout(()=>{
        console.log("Meow meow(Will display after two seconds)")
    }, 2000);
});
console.log('start here');

// npm install --save npm-install-global
// npx create-react-app app1