function verificaPalindromo(frase) {
    let retiradoDaFrase = /[\W]/g;
    let fraseLimpa = frase.toLowerCase().replace(retiradoDaFrase, '');
    let fraseAoContrario = fraseLimpa.split('').reverse().join('');
    return fraseLimpa===fraseAoContrario;
}
console.log(verificaPalindromo('12345'));