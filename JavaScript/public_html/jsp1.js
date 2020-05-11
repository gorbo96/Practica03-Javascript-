/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ingreso(x) {
    var num = Number(document.getElementById("ing").value);
    if(num==0) {
        document.getElementById("ing").value=x;
    }
    else {
        document.getElementById("ing").value+=x;
    }
}
function calcular () {
    var cdn = document.getElementById("ing").value;
    var rst = eval(cdn);
    document.getElementById("sld").value=rst;    
}
function limpiar () {
    document.getElementById("ing").value="0";
    document.getElementById("sld").value="0";
} 
