// EXERCÍCIO 3.1
function exercicio3_1() {
    var contagem = "";

    for (var numero = 30; numero >= 0; numero--) {
        contagem = contagem + numero + " ";
    }

    alert(contagem + "EXPLOSÃO");
}

// EXERCÍCIO 3.2
function exercicio3_2() {
    var primeiroValor = Number(prompt("Digite o primeiro valor:"));
    var segundoValor = Number(prompt("Digite o segundo valor, maior que zero:"));

    while (segundoValor <= 0) {
        segundoValor = Number(prompt("Valor inválido. Digite um número maior que zero:"));
    }

    alert("Resultado da divisão: " + primeiroValor / segundoValor);
}

// EXERCÍCIO 3.3
function exercicio3_3() {
    var soma = 0;
    var quantidade = 0;

    for (var numero = 15; numero <= 100; numero++) {
        soma = soma + numero;
        quantidade++;
    }

    var media = soma / quantidade;
    alert("A média dos números de 15 a 100 é " + media);
}

// EXERCÍCIO 3.4
function exercicio3_4() {
    var primeiro = Number(prompt("Digite o primeiro número inteiro:"));
    var segundo = Number(prompt("Digite um número maior que o primeiro:"));

    while (segundo <= primeiro) {
        segundo = Number(prompt("Digite um número maior que " + primeiro + ":"));
    }

    var soma = 0;
    var quantidade = 0;

    for (var numero = primeiro; numero <= segundo; numero++) {
        soma = soma + numero;
        quantidade++;
    }

    var media = soma / quantidade;
    alert("A média dos números no intervalo é " + media.toFixed(2));
}

// EXERCÍCIO 3.5
function exercicio3_5() {
    var continuar;
    var aprovados = 0;

    do {
        var nota1 = Number(prompt("Digite a primeira nota:"));
        var nota2 = Number(prompt("Digite a segunda nota:"));
        var media = (nota1 + nota2) / 2;

        alert("Média do aluno: " + media.toFixed(2));

        if (media >= 9.5) {
            aprovados++;
        }

        continuar = prompt("Calcular a média de outro aluno? (S/N)").toUpperCase();
    } while (continuar === "S");

    alert("Quantidade de alunos aprovados: " + aprovados);
}

// EXERCÍCIO 3.6
function exercicio3_6() {
    var soma = 0;

    for (var contador = 1; contador <= 6; contador++) {
        var nota = Number(prompt("Digite a nota " + contador + ", entre 0 e 10:"));

        while (nota < 0 || nota > 10) {
            nota = Number(prompt("Nota inválida. Digite um valor entre 0 e 10:"));
        }

        soma = soma + nota;
    }

    var media = soma / 6;
    alert("A média das notas é " + media.toFixed(2));
}

// EXERCÍCIO 3.7
function exercicio3_7() {
    var numeroFinal = Number(prompt("Digite um número maior que zero:"));

    while (numeroFinal <= 0) {
        numeroFinal = Number(prompt("Valor inválido. Digite um número maior que zero:"));
    }

    var resultado = "";

    for (var numero = 1; numero <= numeroFinal; numero++) {
        resultado = resultado + numero + " ";
    }

    alert(resultado);
}

// EXERCÍCIO 3.8
function exercicio3_8() {
    var resultado = "";

    for (var numero = 101; numero <= 110; numero++) {
        resultado = resultado + numero + " ";
    }

    alert(resultado);
}

// EXERCÍCIO 3.9
function exercicio3_9() {
    var dentro = 0;
    var fora = 0;

    for (var contador = 1; contador <= 10; contador++) {
        var numero = Number(prompt("Digite o valor " + contador + ":"));

        if (numero >= 24 && numero <= 42) {
            dentro++;
        } else {
            fora++;
        }
    }

    alert("Valores dentro do intervalo: " + dentro +
        "\nValores fora do intervalo: " + fora);
}
