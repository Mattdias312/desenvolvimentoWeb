function calcular(){
    let nota1 = 0.00;
    nota1 = parseFloat(document.querySelector("input[name='nota1'").value);
    let nota2 = 0.00;
     nota2 = parseFloat(document.querySelector("input[name='nota2'").value);
    let media = 0.00;
    
    media = (nota1 * 0.3) + (nota2 * 0.7)

    document.getElementById('media').innerHTML ="A média do aluno é " + media.toFixed(2);

}