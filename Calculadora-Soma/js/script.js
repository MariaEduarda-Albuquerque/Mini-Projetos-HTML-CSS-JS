function calcularSoma(){
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    soma = num1+num2;
    //document.write(soma);

     if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
        document.getElementById('resultado').textContent = "Digite apenas números!";
        document.getElementById('resultado').style.color = "red";
        return;
    }

    document.getElementById('resultado').textContent = soma;
}