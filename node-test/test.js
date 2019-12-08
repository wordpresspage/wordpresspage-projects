console.log("hello world");

console.log(2+2);

var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>html is great</h1>", function(error) {
   if (error) {
       return console.log(error);
   } else {
       return console.log("축하합니다.")
   }
})

var https = require('http');
var myPhotoLocation = 'http://db.kookje.co.kr/news2000/photo/2019/0916/L20190916.99002014239i1.jpg'

https.get(myPhotoLocation, function (response) {
    response.pipe(fs.createWriteStream(__dirname + "/mygirl.jpg"))

})