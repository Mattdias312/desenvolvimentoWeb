function calcular(){
    let salario = 0.00;
    salario = parseFloat(document.getElementById('salario').value);
    let aumento = 0.00;
     aumento = parseFloat(document.getElementById('aumento').value);
    let novoSalario = 0.00;
    if(aumento < 1){
        novoSalario = salario + (salario * aumento);
    }
    else{
        novoSalario = salario + (salario *(aumento/100));
    }

    document.getElementById('resultado').innerHTML ="O novo salário é " + novoSalario.toFixed(2);

}