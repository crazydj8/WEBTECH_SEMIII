const fs = require('fs');
fs.rename('notrenamed.txt', 'renamed.txt', (err)=>{ 
    console.log("File renamed")
})