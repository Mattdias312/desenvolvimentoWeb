elementoCep = document.getElementById('pesquisaCep')
elementoEndereco = document.getElementById('pesquisaCep')

elementoEndereco.addEventListener('click', async function(){
    document.getElementById('resultado').innerText = ""
        var estado= document.getElementById("estado").value
        var cidade= document.getElementById("cidade").value
        var rua= document.getElementById("rua").value
        if (estado=='' || cidade =='' || rua=='')
            alert("Preencha todos os campos");
        else
        {
            var cep = valor.replace(/\D/g, '');
            var validacep = /^[0-9]{8}$/;
       
            if(validacep.test(cep)) {
            var api= 'https://viacep.com.br/ws/'+cep+'/json/';
            let resposta = await fetch(api);
            dados = await  resposta.json();
            console.log(dados);
            if (dados.erro)
               document.getElementById('resultado').innerText = "CEP Não Existe";
            else
               document.getElementById('resultado').innerText = dados.logradouro + " "+ dados.bairro + " "+ dados.localidade + " "+ dados.uf
    
    
     }
          else
            alert("cep inválido");
    }
    })

    elementoCep.addEventListener('click', async function(){
        document.getElementById('resultado').innerText = ""
        var valor= document.getElementById("cep").value
        if (valor=='')
            alert("Informe o CEP");
        else
        {
            
        }
    })