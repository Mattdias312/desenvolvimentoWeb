function calcular(){
    let nascimento = 0.00;
    nascimento = document.querySelector("input[name='nascimento'").value;
    let splitNasc = nascimento.split('-')
    hoje = new Date()
    let splithoje = hoje.toLocaleDateString().split('/')

    anos = splithoje[2] - splitNasc[0]
    if(splithoje[1] >= splitNasc[1])
    meses = splithoje[1] - splitNasc[1]
    else
    meses = (splithoje[1] + 12) - splitNasc[1]

    if(splithoje[0] >= splitNasc[2])
    dias = splithoje[0] - splitNasc[2]
    else if(splitNasc[1] == 2)
    dias = splithoje[0] - splitNasc[2]
    console.log(anos)
    console.log(meses)
    console.log(dias)
    

}

