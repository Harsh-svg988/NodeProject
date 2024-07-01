const fs = require('fs');
const data = fs.readFileSync('file.txt');
// console.log("" + data);

// fs.writeFile('file.txt',"Hello ",'utf-8',(err) =>{
//     console.log
// })
// fs.appendFileSync('file.txt',"class is going on");

// TO MAKE A DIRECTORY
// fs.mkdir('dir2',(err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log('dir formed');
// })

// fs.unlink('file.txt', (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('File removed successfully');
//     }
//   });


// fs.rename('file.txt', 'file1.txt', (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('File renamed successfully');
//     }
//   });





// const p = '/Users/harshkumar/Documents/Coding/Node-pr/file.txt'
// const path = require("path");
// const dirname = path.dirname(p);
// const extension = path.extname(p);
// console.log(dirname);
// console.log(extension);


// // copying the  file to another folder
// const folderPath = './dir2';
// const filePath = './file.txt';
// const newPath = path.join(folderPath,filePath);

// fs.copyFile( filePath,newPath, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('file copied');
//     }
//   });




const http = require('http');
const server = http.createServer((req,res) =>{
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>node js class </title></head><body>');
    res.write('<h1>hello from node js</h1>');
    res.write('</body></html>');
    res.end();
})

const port = 3000;
const host = 'localhost';
server.listen(port,host,()=>{
    console.log(`server is running on port on http://${host}:${port}`);
});