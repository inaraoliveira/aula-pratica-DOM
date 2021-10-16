var primeiroValor = document.getElementById('valor');
var segundoValor = document.getElementById('valor2');
const botao = document.getElementById('exibir');

botao.addEventListener('click', () =>{
   
    if(primeiroValor.value > 2 && primeiroValor.value < 10 && segundoValor.value > 2 && segundoValor.value < 10){
        let elementoDiv = document.createElement('div');
        elementoDiv.innerHTML = `Soma:${Number(primeiroValor.value) + Number(segundoValor.value)}`;
        document.body.appendChild(elementoDiv);
    }
    else{
        alert('Números invalidos. Os números devem ser maiores que 2 e menores que 10')
    }
});