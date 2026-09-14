// EXERCÍCIO 2.1
function exercicio2_1() {
    var numero1 = Number(prompt("Digite o primeiro número:"));
    var numero2 = Number(prompt("Digite o segundo número:"));

    if (numero1 > numero2) {
        alert("O maior número é " + numero1);
    } else if (numero2 > numero1) {
        alert("O maior número é " + numero2);
    } else {
        alert("Os números são iguais.");
    }
}

// EXERCÍCIO 2.2
function exercicio2_2() {
    var numero = Number(prompt("Digite um número:"));

    if (numero > 0) {
        alert("O número é positivo.");
    } else if (numero < 0) {
        alert("O número é negativo.");
    } else {
        alert("O número é zero.");
    }
}

// EXERCÍCIO 2.3
function exercicio2_3() {
    var numero1 = Number(prompt("Digite o primeiro número:"));
    var numero2 = Number(prompt("Digite o segundo número:"));
    var numero3 = Number(prompt("Digite o terceiro número:"));
    var maior = numero1;

    if (numero2 > maior) {
        maior = numero2;
    }

    if (numero3 > maior) {
        maior = numero3;
    }

    alert("O maior número é " + maior);
}

// EXERCÍCIO 2.4
function exercicio2_4() {
    var numero1 = Number(prompt("Digite o primeiro número:"));
    var numero2 = Number(prompt("Digite o segundo número:"));
    var numero3 = Number(prompt("Digite o terceiro número:"));
    var menor = numero1;

    if (numero2 < menor) {
        menor = numero2;
    }

    if (numero3 < menor) {
        menor = numero3;
    }

    var soma = numero1 + numero2 + numero3 - menor;
    alert("A soma dos dois maiores valores é " + soma);
}

// EXERCÍCIO 2.5
function exercicio2_5() {
    var numero1 = Number(prompt("Digite o primeiro número:"));
    var numero2 = Number(prompt("Digite o segundo número:"));
    var numero3 = Number(prompt("Digite o terceiro número:"));
    var numero4 = Number(prompt("Digite o quarto número:"));
    var numero5 = Number(prompt("Digite o quinto número:"));
    var numero6 = Number(prompt("Digite o sexto número:"));
    var media = (numero1 + numero2 + numero3 + numero4 + numero5 + numero6) / 6;

    alert("Valores: " + numero1 + ", " + numero2 + ", " + numero3 +
        ", " + numero4 + ", " + numero5 + ", " + numero6 +
        "\nMédia: " + media.toFixed(2));
}

// EXERCÍCIO 2.6
function exercicio2_6() {
    var numero1 = Number(prompt("Digite o primeiro número:"));
    var numero2 = Number(prompt("Digite o segundo número:"));
    var numero3 = Number(prompt("Digite o terceiro número:"));
    var numero4 = Number(prompt("Digite o quarto número:"));
    var maior = numero1;

    if (numero2 > maior) {
        maior = numero2;
    }
    if (numero3 > maior) {
        maior = numero3;
    }
    if (numero4 > maior) {
        maior = numero4;
    }

    alert("Primeiro valor: " + numero1 +
        "\nÚltimo valor: " + numero4 +
        "\nMaior valor: " + maior);
}

// EXERCÍCIO 2.7
function exercicio2_7() {
    var numeros = [];
    var soma = 0;

    for (var contador = 0; contador < 6; contador++) {
        var numero = Number(prompt("Digite o valor " + (contador + 1) + ":"));
        numeros.push(numero);

        if (numero < 72) {
            soma = soma + numero;
        }
    }

    alert("Valores informados: " + numeros.join(", ") +
        "\nSoma dos valores menores que 72: " + soma);
}

// EXERCÍCIO 2.8
function exercicio2_8() {
    var soma = 0;

    for (var contador = 1; contador <= 4; contador++) {
        var numero = Number(prompt("Digite o valor " + contador + ", entre 1 e 9:"));

        while (numero <= 0 || numero >= 10) {
            numero = Number(prompt("Valor inválido. Digite um número entre 1 e 9:"));
        }

        soma = soma + numero;
    }

    var media = soma / 4;

    if (media > 5) {
        alert("Média: " + media.toFixed(2) + "\nVocê passou no teste.");
    } else {
        alert("Média: " + media.toFixed(2) + "\nTente novamente.");
    }
}

// EXERCÍCIO 2.9
function exercicio2_9() {
    var anoNascimento = Number(prompt("Digite seu ano de nascimento:"));
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - anoNascimento;

    if (idade >= 16) {
        alert("Idade: " + idade + " anos.\nVocê pode votar neste ano.");
    } else {
        alert("Idade: " + idade + " anos.\nVocê ainda não pode votar neste ano.");
    }
}
