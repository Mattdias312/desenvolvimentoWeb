function calcular(){
    let salario = 0.00;
    salario = parseFloat(document.querySelector("input[name='salario'").value);
    let horas = 0.00;
     horas = parseFloat(document.querySelector("input[name='horas'").value);
    let refeicao = 0.00;
     refeicao = parseFloat(document.querySelector("input[name='refeicoes'").value);
    let consumo = 0.00;
    
    if(horas > 40){
        salarioBruto = ((horas - 40) * (3 * salario)) + (salario * 40)
        desconto = refeicao * 1.5
        salarioLiquido = salarioBruto - desconto
    }
    else{
        salarioBruto = salario * horas
        desconto = refeicao * 1.5
        salarioLiquido = salarioBruto - desconto
    }

    document.getElementById('resultado').innerHTML ="O salário bruto é R$" + salarioBruto.toFixed(2) + " o desconto é R$" + desconto.toFixed(2) +" e o salário líquido é R$" + salarioLiquido.toFixed(2);

}

var input = document.querySelectorAll('#distancia')[0];
var inputVol = document.querySelectorAll('#volume')[0];
let pontoDist = true
let pontoVol = true
  


 function mask(id){
    var input = document.querySelectorAll(id)[0];
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
inputMask(input);
 }
