var saldo = 100.50;
var nome = prompt("Digite seu nome:");
var senhaCorreta = 3589;

alert("Olá, " + nome + ", é um prazer ter você por aqui!");

function inicio() {
    var escolha = parseInt(prompt(
        "Selecione uma opção:" +
        "\n1 - Saldo" +
        "\n2 - Extrato" +
        "\n3 - Saque" +
        "\n4 - Depósito" +
        "\n5 - Transferência" +
        "\n6 - Sair"
    ));

    switch (escolha) {
        case 1:
            ver_saldo();
            break;
        case 2:
            ver_extrato();
            break;
        case 3:
            fazer_saque();
            break;
        case 4:
            fazer_deposito();
            break;
        case 5:
            fazer_transferencia();
            break;
        case 6:
            sair();
            break;
        default:
            erro();
    }
}

function validar_senha() {
    var senha = parseInt(prompt("Digite sua senha:"));

    if (senha === senhaCorreta) {
        return true;
    } else {
        alert("Senha incorreta. Tente novamente.");
        return validar_senha();
    }
}

function ver_saldo() {
    validar_senha();

    alert("Seu saldo atual é: R$ " + saldo.toFixed(2));
    inicio();
}

function ver_extrato() {
    validar_senha();

    var extrato =
        "EXTRATO BANCÁRIO" +
        "\nDepósito recebido: R$ 200,00" +
        "\nMercado: -R$ 45,50" +
        "\nFarmácia: -R$ 24,00" +
        "\nSaldo atual: R$ " + saldo.toFixed(2);

    alert(extrato);
    inicio();
}

function fazer_deposito() {
    var deposito = parseFloat(prompt("Qual o valor para depósito?"));

    if (isNaN(deposito)) {
        alert("Por favor, informe um número.");
        fazer_deposito();
    } else if (deposito <= 0) {
        alert("Operação não autorizada.");
        inicio();
    } else {
        saldo = saldo + deposito;

        alert(
            "Depósito realizado com sucesso." +
            "\nSaldo atual: R$ " + saldo.toFixed(2)
        );

        inicio();
    }
}

function fazer_saque() {
    validar_senha();

    var saque = parseFloat(prompt("Qual o valor para saque?"));

    if (isNaN(saque)) {
        alert("Por favor, informe um número.");
        fazer_saque();
    } else if (saque <= 0 || saque > saldo) {
        alert("Operação não autorizada.");
        inicio();
    } else {
        saldo = saldo - saque;

        alert(
            "Saque realizado com sucesso." +
            "\nSaldo atual: R$ " + saldo.toFixed(2)
        );

        inicio();
    }
}

function fazer_transferencia() {
    validar_senha();

    var conta = prompt("Digite o número da conta:");

    if (conta === null || conta.trim() === "" || isNaN(Number(conta))) {
        alert("A conta deve possuir apenas números.");
        fazer_transferencia();
    } else {
        var valor = parseFloat(
            prompt("Digite o valor da transferência:")
        );

        if (isNaN(valor)) {
            alert("Por favor, informe um número.");
            fazer_transferencia();
        } else if (valor <= 0 || valor > saldo) {
            alert("Operação não autorizada.");
            inicio();
        } else {
            saldo = saldo - valor;

            alert(
                "Transferência realizada com sucesso para a conta " +
                conta +
                ".\nSaldo atual: R$ " +
                saldo.toFixed(2)
            );

            inicio();
        }
    }
}

function erro() {
    alert("Por favor, informe um número entre 1 a 6.");
    inicio();
}

function sair() {
    var confirma = confirm("Você deseja sair?");

    if (confirma) {
        alert(nome + ", foi um prazer ter você por aqui!");
    } else {
        inicio();
    }
}

inicio();