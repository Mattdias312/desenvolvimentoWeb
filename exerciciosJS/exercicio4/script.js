function calcular(){
    let nascimento;
    nascimento = document.querySelector("input[name='nascimento'").value;
    let splitNasc = nascimento.split('-')
    hoje = new Date()
    let splithoje = hoje.toLocaleDateString().split('/')
    if(splithoje[1] >= splitNasc[1]){
        anos = (splithoje[2] - splitNasc[0])
        meses = splithoje[1] - splitNasc[1]
    }
    else{
        meses = (Number(splithoje[1]) + 12) - splitNasc[1]
        anos = (splithoje[2] - splitNasc[0])-1
    }

    if(splithoje[0] >= splitNasc[2]){
        dias = splithoje[0] - splitNasc[2]
    }
    else if(splithoje[1] == 2){
        dias = (Number(splithoje[0]) + 28) - splitNasc[2]
    }
    else if(splithoje[0] == 4 || splithoje[0] == 6 || splithoje[0] == 9 || splithoje[0] == 11){
        dias = (Number(splithoje[0]) + 30) - splitNasc[2]
    }
    else{
        dias = (Number(splithoje[0]) + 31) - splitNasc[2]
    }

    let horario = document.querySelector("input[name='hora'").value;
    let hora = horario.split(":")
    let horaHojeSplit = hoje.toLocaleTimeString().split(":")
    if(horaHojeSplit[0] < hora[0]){
        horas = (Number(horaHojeSplit[0]) + 24) - hora[0]
        dias += -1
    }
    else{
        horas = horaHojeSplit[0] - hora[0]
    }
    if(horaHojeSplit[1] < hora[1]){
        minutos = (Number(horaHojeSplit[1]) + 60) - hora[1]
    }
    else{
        minutos = horaHojeSplit[1] - hora[1]
    }
    
    console.log(horas,minutos)
    console.log(anos)
    console.log(meses)
    console.log(dias)
    

}

