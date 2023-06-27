//ここを好きな文字に変えます
var msg = '無上甚深微妙百千万劫難遭遇我今見聞徳授願解見如来真実義';
var elmP; 
var n = 0;

function jsTypeWriter() {
  var s = msg.charAt(n);
  elmP.innerHTML += s;
  if (n < msg.length - 1) {
    n++;
    //第2引数を大きい数字にするとゆっくりに
    //小さい数字にすると早くなります
    setTimeout(jsTypeWriter, 200);
  } else {
    //↓のfontSizeとlineHeightを微妙に調整しないと
    //最後の全文表示んときに、表示位置がズレちゃいます
    elmP.style.fontSize = '8em';
    elmP.style.lineHeight = '2.5em';
  }
}

window.onload = function () {
  elmP = document.getElementById('kaikoge');
  jsTypeWriter();
};