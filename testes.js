const manipulacaoString = require('./manipulacaoString');

describe('Função verificaPalindromo', () => {
    it('Deve retornar true para strings palíndromos', () => {
        expect(manipulacaoString.verificaPalindromo('ovo')).toBe(true);
        expect(manipulacaoString.verificaPalindromo('arara')).toBe(true);
        expect(manipulacaoString.verificaPalindromo('radar')).toBe(true);
    });

    it('Deve retornar false para strings que não são palíndromos', () => {
        expect(manipulacaoString.verificaPalindromo('banana')).toBe(false);
        expect(manipulacaoString.verificaPalindromo('casa')).toBe(false);
        expect(manipulacaoString.verificaPalindromo('computador')).toBe(false);
    });
});

describe('Função contaOcorrenciasCaracteres', () => {
    it('Deve contar as ocorrências de cada caractere na string', () => {
        const resultado = manipulacaoString.contaOcorrenciasCaracteres('banana');
        expect(resultado).toEqual({ b: 1, a: 3, n: 2 });

        const resultado2 = manipulacaoString.contaOcorrenciasCaracteres('arara');
        expect(resultado2).toEqual({ a: 3, r: 2 });
    });

    it('Deve ignorar espaços em branco', () => {
        const resultado = manipulacaoString.contaOcorrenciasCaracteres('palavra com espaços');
        expect(resultado).toEqual({ p: 1, a: 1, l: 1, v: 1, r: 1, a: 2, m: 1, c: 1, o: 1 });
    });
});
