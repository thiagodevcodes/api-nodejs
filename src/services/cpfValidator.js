//Função para validar cpf
function cpfValidator(cpf) {
    
    // / \D / g em conjunto com replace está substituindo todos os caracteres não numéricos na string cpf por uma string vazia ''.
    cpf = removeNonNumericChars(cpf)

    //Verifica se o tamanho da string é 11
    if(cpf.length != 11) return false;

    //Chamada da função para verificar se os digitos são iguais
    if (areAllDigitsEqual(cpf)) return false;

    //Digito 1

    let soma = 0;

    //Laço for para calcular o primeiro digito verificador
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    //Verifca o resto da divisão entre a soma gerada por 11
    let resto = soma % 11;

    //Operador ternário para verificar se o resto da divisão é menor que 2, se for, vai ser igual a zero, senão será pego o 11 e subtrair pelo resto da divisão
    let digitoVerificador1 = (resto < 2) ? 0 : 11 - resto;

    //se o Digito verifcador obtido for diferente do que veio através do input, então retorna falso
    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
        return false;
    }

    //Digito 2

    soma = 0;
    //Laço for para calcular o segundo digito verificador
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    
    resto = soma % 11;
    
    //Operador ternário para verificar se o resto da divisão é menor que 2, se for, vai ser igual a zero, senão será pego o 11 e subtrair pelo resto da divisão
    let digitoVerificador2 = (resto < 2) ? 0 : 11 - resto;
    
    //Se o Digito verifcador obtido for diferente do que veio através do input, então retorna falso
    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) return false;
    
    // Se passar por todas as verificações, retorna true, validando o CPF
    return true;
}

// Função para remover todos os caracteres não numéricos de uma string
function removeNonNumericChars(str) {
    return str.split('').filter(char => '0' <= char && char <= '9').join('');
}

// Função para verificar se todos os dígitos em uma string são iguais
function areAllDigitsEqual(str) {
    return new Set(str.split('')).size === 1;
}

module.exports = cpfValidator