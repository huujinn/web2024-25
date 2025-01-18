function change1(){
document.getElementById('sp').src=
'./image/IMG_7224.JPG';
var chan='./image/IMG_7131.JPG';
//3秒後
setTimeout(function(){
document.getElementById('sp').src=
chan;},3000);
}

