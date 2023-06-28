
// fs Module
// console.log('Read Start');
// const fs = require('fs');

// Async way to read file********************************
// fs.readFile('input.txt',function(err,data){
// if(err){
//     console.log('Error', err);
//     return err;
// }
// console.log('Data: ',data.toString());
// console.log('READ END');
// return data;
// })
// console.log("OTHER STUFF");


//Synchronous way to read file****************************
// var data = fs.readFileSync('input.txt');
// console.log('Data :',data.toString());
// console.log('Read End');
// console.log('Other Stuff');


//  const buf = new Buffer(1024)
//Read> Open +read
// fs.open('input.txt','r+',function(err,fd){
//     if(err){
//       console.log( 'Error in opening file :',err); 
//     }
//     console.log("file open Sucessfully");

//     fs.read(fd,buf,0,buf.length,0,function(er,databytes){
//         if(er){
//             console.log(`Error in reading file `);
//         }
//         console.log(`Data :`,databytes.toString());
//         console.log(`Data :`,buf.slice(0,databytes).toString());
//     fs.close(fd,function(err) {
//         if(err){
//         console.log(`Error  in closing files`)
//         }else{
//         console.log(`Sucessfully closed files`)
//         }
//     })
//     })
// });

    //Writing to file
//     fs.writeFile('input.txt','PW__Skills',function(err){
//         if(err){
//             console.log(`Error in Writing File`);
//         }else{
//             console.log(`Success in Writing File`);

//         }
//     })




//Apending a file

// fs.appendFile('input.txt','--Abhishek kumar','utf8',function(err){
//     if(err){
//         console.log(`Error in Apending File`);
//     }else{
//         console.log(`Success in Apending File`);

//     }
// })

// Deleting file
// fs.unlink('input.txt', function(err){
//     if(err){
//         console.log(`Error in Deleting files`)
//     }else{
//         console.log(`Sucess in deleting files`)
//     }
// })


