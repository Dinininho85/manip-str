Objetivo: Dentro do método POST, implementar a lógica para manipular uma string enviada no body da requisição.  
 
Corpo de Entrada (JSON): { "texto": "string de entrada" }  
 
Corpo de Saída (JSON):  { "palindromo": true/false, "ocorrencias_caracteres": { "caractere1": 
quantidade1, "caractere2": quantidade2, ... } } 
 
Linguagens de programação: nodeJs 
 
Exemplo de Chamada cURL:  
curl -X POST -H "Content-Type: application/json" -d '{" texto ": "banana"}' http://seuservidor.com/api/manipulacao-string  
 
Requisitos:  
1.	Receber uma string no body da requisição.  
2.	Implementar operações para manipular a string de acordo com as seguintes especificações: 
-	Verificar se a string é um palíndromo.  
-	Contar o número de ocorrências de cada caractere na string. 
 
3.	Retornar uma resposta indicando o resultado de cada operação solicitada.  
 
Critérios de avaliação:  
-	Implementação correta das operações de manipulação de strings.  
-	Eficiência da solução em termos de tempo de execução e uso de memória.  
-	Tratamento adequado de casos especiais e erros, como strings vazias.  
-	Boas práticas de codificação, incluindo modularidade e legibilidade do código.  
 
Exemplo: Se a string enviada no body da requisição for "banana":  
-	A resposta retornada incluiria:  
-	Se a string é um palíndromo: "false" (não é um palíndromo) 
-	O número de ocorrências de cada caractere na string: {"b": 1, "a": 3, "n": 2} 
 
Instruções:  
1.	Implemente as operações de manipulação de strings dentro do método POST.  
2.	Certifique-se de que o retorno da resposta inclua o resultado de cada operação solicitada, exatamente no formato de JSON informado acima.  
 
Entregas: 
-URL onde a aplicação desenvolvida foi hospedada, o candidato deve hospedar a aplicação desenvolvida em algum servidor na internet e disponibilizar a URL onde a API desenvolvida pode ser chamada. 
-URL onde o código fonte pode ser consultado: GitHub, Bitbucket, Gitlab, ou qualquer outro repositório de código público. 
Obs1: Informamos que será realizada primeiramente análise automatizada da aplicação, dessa forma informamos que devem ser seguidas exatamente as estruturas de JSON e padrão de PATH informadas acima, sob o risco da aplicação ser considerada incorreta. 
Obs2: Informamos que a aplicação pode ser hospedada em qualquer ambiente público na internet (lembramos que diversos provedores, inclusive de nuvem onde o candidato pode hospedar a aplicação de forma gratuita por um período. Exemplos de provedores AWS, Digital Ocean etc). 

