let adicionais;
let valorPacote;

function calcularTotalViagem(){
    calcularPacote();
    calcularAdicionais();
    let valorTotal = valorPacote + adicionais
    valorTotal.toFixed(2)
    let nomeCli = document.querySelector("input[name='nomeCli']").value
    // document.getElementById('resultado').innerHTML = nomeCli +' vai pagar R$'+ valorTotal.toFixed(2);
    document.getElementById('resultado').innerHTML = nomeCli +' vai pagar R$'+ valorTotal + ',00';

}

function calcularPacote(){
    valorPacote = 0;
    // let qtdPacotes = document.querySelectorAll("input[name='pacotes']:checked").length; :checked mostra só os selecionados
    let qtdPacotes = document.querySelectorAll("input[name='pacotes']").length;

    let pacotes = document.querySelectorAll("input[name='pacotes']");

    // let pacote = document.querySelector("input[name='pacotes']:checked").value;    
    
    for (var i = 0; i < qtdPacotes; i++){
        if(pacotes[i].checked){
            valorPacote = Number(pacotes[i].value);
            console.log(valorPacote);
            break;
        }
    }
}

function calcularAdicionais(){
    adicionais = 0;
    let alimentacao = document.querySelector("input[name='alimentacao']");
    let veiculo = document.querySelector("input[name='veiculo']");
    let translado = document.querySelector("input[name='translado']");
    if(alimentacao.checked)
    adicionais += Number(alimentacao.value);
    if(veiculo.checked)
    adicionais += Number(veiculo.value);
    if(translado.checked)
    adicionais += Number(translado.value);
    console.log(adicionais)
    
}