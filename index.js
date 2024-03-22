const express = require('express');
const manipulacaoString = require('./manipulacaoString');

const app = express();
const port = process.env.PORT || 3000;

// Configuração do middleware para JSON
app.use(express.json());

// Rota para o método POST que manipula a string
app.post('/api/manipulacao-string', async (req, res) => {
    const { texto } = req.body;

    // Validação da entrada
    if (!texto) {
        return res.status(400).json({ mensagem: 'Texto não enviado' });
    }

    // Manipulação da string
    const resultado = {
        palindromo: manipulacaoString.verificaPalindromo(texto),
        ocorrencias_caracteres: manipulacaoString.contaOcorrenciasCaracteres(texto),
    };

    // Retorno da resposta
    res.json(resultado);
});

// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
