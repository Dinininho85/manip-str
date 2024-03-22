function verificaPalindromo(texto) {
    const textoMinusculo = texto.toLowerCase();
    const textoReverso = textoMinusculo.split('').reverse().join('');

    return textoMinusculo === textoReverso;
}

function contaOcorrenciasCaracteres(texto) {
    const ocorrencias = {};

    for (let i = 0; i < texto.length; i++) {
        const caractere = texto[i];
        if (ocorrencias[caractere]) {
            ocorrencias[caractere]++;
        } else {
            ocorrencias[caractere] = 1;
        }
    }

    return ocorrencias;
}

module.exports = {
    verificaPalindromo,
    contaOcorrenciasCaracteres,
};
