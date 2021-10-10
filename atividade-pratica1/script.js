const funcaoOnload = () => {
    let capitais = document.getElementsByClassName("resultado");
    capitais[0].innerHTML = "Teresina";
    capitais[1].innerHTML = "Fortaleza.";
    capitais[2].innerHTML = "Natal";
    capitais[3].innerHTML = "João Pessoa";
    capitais[4].innerHTML = "Recife";

}

const funcaoOnload2 = () => {
  let resultado=document.getElementsByClassName("resultado");
  let numero=9;
 for (let n = 0; n <=10; n++) {
  resultado[n].innerHTML=`${n} + ${numero} = ${(n + numero)}`;

 }
   
}

