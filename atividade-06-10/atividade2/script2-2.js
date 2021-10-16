var nome = document.getElementById('nomeUsuario');
var idade = document.getElementById('idadeUsuario');

var nomeMaiusculo = () => {
    nome.value = nome.value.toUpperCase();
}

let somarIdade = () => {
    let idadeFutura = idade.value
    alert(`Daqui a 10 anos você terá ${Number(idadeFutura) + 10} anos`)
}