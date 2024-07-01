// const fs = require('fs');

// Asynchronous read
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File content:', data);
// });

// const data = fs.readFileSync('file.txt');
// console.log('File content:', "" + data);

// fs.writeFileSync('file.txt', 'Hello, world by by yby !', 'utf8',(err)=>{
//     console.log('file modified');
// });

// fs.appendFileSync('file.txt', 'new text after appending !', 'utf8',(err)=>{
//     console.log('file modified');
// });

// fs.mkdirSync('newDir');
// fs.rmdirSync('newDir');

// fs.mkdir('newDir', (err) => {
//     if (err) {
//         console.error('Error creating directory:', err);
//         return;
//     }
//     console.log('Directory created successfully!');
//     }
// );
// fs.rmdir('newDir', (err) => {
//     if (err) {
//         console.error('Error deleting directory:', err);
//         return;
//     }
//     console.log('Directory deleted successfully!');
//     }
// );

// const p = 'C:\Users\JASH\Desktop\BACKEND_DAILY_WORK\index.js';
// const path = require("path"); const dirname = path.dirname(p); const extension = path.extname(p);
// console.log(dirname);
// console.log(extension);

// fs.writeFileSync('newDir/my-file.txt', 'This is new File..');

// const oldPath = 'file.txt';
// const newPath = 'newDir//my-file.txt'

// fs.copyFile(oldPath,newPath,(err) =>{
//     if(err){
//         throw err;
//     }
//     console.log('File Copied Successfullyy..')
// })

const http = require('http');

const server = http.createServer((req, res) => {   
    res.write('<html> <head> <title>My First Web Server</title> </head> <body> <h1>Hello, world!</h1> </body> </html>');
    res.end();
});

const port = 3000;
const host = 'localhost';
server.listen(port,host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
