function change1(){
document.getElementById('skp').src=
'./image/IMG_7223.JPG';
var chan='./image/IMG_9478.JPG';
//3秒後
setTimeout(function(){
document.getElementById('skp').src=
chan;},3000);
}
