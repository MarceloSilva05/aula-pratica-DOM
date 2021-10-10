
function somar() {
    let p1 = Number(document.getElementById("p1").value);
    let p2 = Number(document.getElementById("p2").value);
    let resultado;
    if (p1 >= 2 && p1 <= 10 && p2 >= 2 && p2 <= 10) {
        resultado = p1 + p2;
    } else {
        resultado = ("presta atenção mula")
    }
    document.getElementById("resultado").innerHTML = resultado;
}



function exercicioUpperCase(){
    var nome=document.getElementById("nome");
    nome.value = nome.value.toUpperCase();
    
}
const idadeSoma=()=>{
    var idade=document.getElementById("idade");
    idade.value =idade.value=` Daqui a 10 anos você terá ${Number(idade.value) + 10} anos`
}