elementoCep = document.getElementById('pesquisaCep')
elementoEndereco = document.getElementById('pesquisaEndereco')
elementoPesquisaClima = document.getElementById('pesquisaClima')
let weatherKey = '1ca5d9bcba072530dcdb4178f50e3e9f'
let bandeira = "https://flagsapi.com"
let imgemCidade = "https://source.unsplash.com/1600x900/?";

elementoCep.addEventListener('click', async function(){
    document.getElementById('resultado').innerText = ""
    var valor= document.getElementById("cep").value
    if (valor=='')
    alert("informe o CEP");
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
            else{
                document.getElementById('resultado').innerText = dados.logradouro + " "+ dados.bairro + " "+ dados.localidade + " "+ dados.uf
                document.getElementById('cidade').value = dados.localidade
                cidade = dados.localidade
            }
    
    
     }
     else
     alert("cep inválido");
    }
    })

    elementoPesquisaClima.addEventListener('click', async function(){
        document.getElementById('resultado').innerText = ""
        cidade = document.getElementById('cidade').value
        const apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${weatherKey}&lang=pt_br`;
        let respostaClima = await fetch(apiClimaURL)
        let objDados = await respostaClima.json()
        console.log(apiClimaURL)
        console.log(objDados)
        temperatura = objDados.main.temp
        descricao = objDados.weather[0].description
    document.getElementById('resultado').innerText = `Hoje está ${temperatura} e ${descricao}`
    })