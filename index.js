const button = document.getElementById('sumButton');
 let processamento = sumButton.addEventListener('click', function (){
    let input1 = document.getElementById('input1').value;
let input2 = document.getElementById('input2').value;
const ResultVoid = document.getElementById('ResultVoid')
    let soma = parseFloat(input1) + parseFloat(input2);
    ResultVoid.innerHTML = soma;
 console.log(soma);
if (isNaN(soma)){
    ResultVoid.innerHTML = "digite números válidos";
} 
 });
const output = processamento;
console.log(output);