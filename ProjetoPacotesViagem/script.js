function calcularDesconto(){
    let qtdPacotes = document.querySelectorAll("input[name='pacotes']").length;
    console.log(qtdPacotes);

    let pacotes = document.querySelectorAll("input[name='pacotes']");
    console.log(pacotes);

    for (var i = 0; i < qtdPacotes; i++){
        console.log(pacotes[i].value);
    }
}