let lamapada = document.getElementById('lampada');
function Ligar(){
    lamapada.setAttribute("src","LampadaLigada.gif");
}

function Desligar(){
    lamapada.setAttribute("src","LampadaDesligada.gif");
}

function Aparecer(){
    document.getElementById('titulo').style.color = 'red';
    lamapada.hidden = false;
}

function Sumir(){
    lamapada.setAttribute("hidden",true);
}

function Alternar(){
 if(lamapada.getAttribute("src") == "LampadaDesligada.gif"){
     Ligar()
 }   
 else{
     Desligar()
 }
}

function piscar(){
    Alternar()
}setInterval(piscar,1000);