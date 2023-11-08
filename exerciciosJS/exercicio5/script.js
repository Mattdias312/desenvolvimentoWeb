function calcular(){
    let d = 0.00;
    d = parseFloat(document.querySelector("input[name='distancia'").value);
    let v = 0.00;
     v = parseFloat(document.querySelector("input[name='volume'").value);
    let consumo = 0.00;
    
    consumo = d / v 

    document.getElementById('consumo').innerHTML ="O consumo é " + consumo.toFixed(2) + "Km/L";

}

var inputDistancia = document.querySelectorAll('#distancia')[0];
var inputVol = document.querySelectorAll('#volume')[0];
let pontoDist = true
let pontoVol = true
  


 function maskDiastancia(){
var inputMask = function inputMask(elm) {
  elm.addEventListener('keypress', function(e) {
    if(e.keyCode < 47 || e.keyCode > 57) {
      e.preventDefault();
    }
    if((e.keyCode == 44 || e.keyCode == 46)  && pontoDist ){
        elm.value += '.'
        pontoDist = false
    }
}
)};
inputMask(inputDistancia);
 }

 function maskVolume(){
    var inputMask = function inputMask(elm) {
        elm.addEventListener('keypress', function(e) {
          if(e.keyCode < 47 || e.keyCode > 57 ) {
            e.preventDefault();
          }
          if((e.keyCode == 44 || e.keyCode == 46) && pontoVol){
              elm.value += '.'
              pontoVol = false
          }
      }
      )};
      inputMask(inputVol);
 }