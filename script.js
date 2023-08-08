function inserir(){
    let numero = document.getElementById('posicao').value - 1
    let novo = document.getElementById('novo').value
    document.getElementsByClassName('colocado')[numero].innerHTML=novo
}

function mostrar(){
    let numero = document.getElementById("numero").value -1
    let mes = document.getElementsByTagName("li")[numero].innerHTML;
    document.getElementById("resultado").innerHTML=mes;
}