// var fs = require('fs');
//
// //create an empty file named mynewfile2.txt:
// fs.open('./public/Files/Englishoak.csv', 'w', function (err, data) {
//     if (err) throw err;
//     var dataArray = data.split(/\r?\n/);
//     console.log(dataArray);
// });
//
var csv = require("fast-csv");
csv
    .fromPath("./public/Files/Englishoak.csv",{headers : true})
    .on("data", function(data){
        console.log(data);
        // { name: 'hou', age: '18' }
        // { name: 'wang', age: '13' }
    })
    .on("end", function(){
        console.log("done");
    });
