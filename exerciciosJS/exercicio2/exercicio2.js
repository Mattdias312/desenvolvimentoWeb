function calcular(){
    let base = 0.00;
    base = parseFloat(document.getElementById('base').value);
    let altura = 0.00;
     altura = parseFloat(document.getElementById('altura').value);
    let area = 0.00;
    
    area = (base * altura) / 2

    document.getElementById('area').value ="A área do triangule é " + area.toFixed(2);

}