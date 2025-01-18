function change1(){
document.getElementById('skp').src=
'./image/IMG_7223.JPG';
var chan='./image/IMG_7224.JPG';
var chan1='./image/IMG_7131.JPG'
//1秒後に元に戻す
setInterval(function(){
document.getElementById('skp').src=
chan; chan1;},1000);
}

