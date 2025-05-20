function calcularRendimento(){
    let valorRendimento = parseFLoad (document.getElementById("rendimento").Value);

if (!isNaN(valorRendimento)){
    if(valorRendimento > 0){
        const despesasfixa = valorRendimento*(50/100);
        const despesasVariadas = valorRendimento*(30/100);
        const investimento = valorRendimento*(20/100);
    
        document.getElementById("despesasfixa").innerText=despesasFixa;
        document.getElementById("despesasVariadas").innerText=despesasVariadas;
        document.getElementById("investimento").innerText=investimento;
   }else{
    alert("É necessário informar um valor acima de 0!!!")
   }
}else{
    alert("caracteres não são permitidos!!!")
}
}