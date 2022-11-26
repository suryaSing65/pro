// ***** crud with file system *****
const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname,'uploads');
const filepath = `${dirpath}/apple.txt`;
// fs.writeFileSync(filepath,'this is a simple txt file'); //  (comment for not double file create);

// fs.readFile(filepath,'utf-8',(err,item)=>{
//     console.log(item);                           //   (for reading a file);
// })

// fs.appendFile(filepath,' and file name is apple.txt',(err)=>{
//    if(!err) console.log('file is updated');           //  (comment for not doubletime file update)
// });

// fs.rename(filepath,`${dirpath}/fruits.txt`,(err)=>{
//     if(!err) console.log('file name is updated');     // (for update file rename)
// // });

// fs.unlinkSync(`${dirpath}/fruits.txt`);  // (for deleteing file)