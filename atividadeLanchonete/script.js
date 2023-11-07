let adicionais;
let valorEntrega;
let valorTotal;
let entrega = document.querySelectorAll("input[name='entrega']");
let qdtEntrega = document.querySelectorAll("input[name='entrega']").length;
let bacon = document.querySelector("input[name='bacon']");
let picles = document.querySelector("input[name='picles']");
let cheddar = document.querySelector("input[name='cheddar']");
let combo = document.querySelector("select[name='combo']");

function hora(){
    d = new Date
    document.getElementById('hora').innerHTML = d.toLocaleTimeString()
}setInterval(hora,1000);

function calcular(){
    valorEntrega = 0;
    valorTotal = 0;
    calcularAdicionais();
    for(var i=0; i<qdtEntrega; i++){
        if(entrega[i].checked){
            valorEntrega = Number(entrega[i].value)
            break
        }
    }

    valorTotal = valorEntrega + adicionais + Number(combo.value)
    document.getElementById('total').value = valorTotal
    document.getElementById('descricao').value = 'Seu combo custará R$' + combo.value + ',00 com R$' + adicionais + ',00 de adicionais e R$' + valorEntrega + ',00 de taxa de entrega'
    

}

function calcularAdicionais(){
    adicionais = 0;
    if(bacon.checked)
    adicionais += Number(bacon.value);
    if(cheddar.checked)
    adicionais += Number(cheddar.value);
    if(picles.checked)
    adicionais += Number(picles.value);
}
