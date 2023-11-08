function parOuImpar(){
    let num = Math.floor(Math.random() * 1000)
    if(num%2 == 0)
    document.getElementById('numero').innerHTML = 'PAR '+ num
    else
    document.getElementById('numero').innerHTML = 'IMPAR '+ num
    
}