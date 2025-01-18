function change1(){
document.getElementById('skp').src=
'./image/OIP.jpg';
var chan='./image/bulb-off.png';
//1秒後に元に戻す
setInterval(function(){
document.getElementById('skp').src=
chan;},1000);
}

