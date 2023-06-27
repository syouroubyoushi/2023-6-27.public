const elm = document.getElementById("kaikoge");
//const str = document.getElementById("strValue").value;//出力する文字列
const msg = '無上甚深微妙百千万劫難遭遇我今見聞徳授願解見如来真実義';

for(let i = 0; i < msg.length; i++){
    setTimeout(() => {
        elm.innerHTML = "";
        elm.innerHTML = msg[i];
        
    }, 200 * (i + 1));/* i+1をかける！！ */
}
