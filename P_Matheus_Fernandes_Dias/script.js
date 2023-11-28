let elementoEnviar = document.getElementById('enviar')

elementoEnviar.addEventListener('click', async function(){
    let cep = document.getElementById('cep').value;
    console.log(cep)
    var api = `https://viacep.com.br/ws/${cep}/json/`;

    let resposta = await fetch(api);
    let dados = await  resposta.json();
    document.getElementById('cidade').innerHTML = ` ${dados.localidade}`    
})

elementoEnviar.addEventListener('click', async function(){
    let idade = Number(document.getElementById('idade').value)
    let resultado = idade + 30
    alert(resultado)
    
    
    let termo = document.querySelectorAll("input[name='termo']");
    if(termo[0].checked)
    document.getElementById('cadastro').innerHTML = 'Cadastrado com sucesso'
    
})
