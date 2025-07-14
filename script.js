function IMC(){
    altura = parseFloat(document.getElementById('altura').value);
    peso = parseFloat(document.getElementById('peso').value);
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos!');
        return;
    }

   let imc = peso / (altura * altura);
   let status = '';

if(imc < 18.5){
    status = 'Abaixo do peso';
}
else if(imc >= 18.5 && imc < 24.9){
    status = 'Peso normal';
}
else if(imc >= 25 && imc < 29.9){
    status = 'Sobrepeso';
}
else if(imc >= 30 && imc < 34.9){
    status = 'Obesidade grau 1';
}
else if(imc >= 35 && imc < 39.9){
    status = 'Obesidade grau 2';
}
else{
    status = 'Obesidade grau 3';
}
    document.getElementById('resultado').innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + ' - ' + status;
}

