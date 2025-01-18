function change1(){
document.getElementById('skp').src=
'./image/IMG_7223.JPG';
var chan='.';
//1秒後に元に戻す
setInterval(function(){
document.getElementById('skp').src=
chan;},1000);
}

