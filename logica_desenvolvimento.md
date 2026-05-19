// 
********* PLANEJAMENTO DO QUE DESENVOLVER - SKILLMATCH JS *********
Criar um sistema capaz de comparar habilidades de um candidato coom vagas Front-End Junior

****** O sistema deve:
** analisar habilidades;
** calcular compatibilidade;
** mostrar habilidades faltantes;
** indicar melhor vaga;
** recomendar estudos.

****** Estrutura inicial:

** Criar um objeto para o candidato:
- nome;
- área;
- habilidades;
- experiencia em meses.

** Criar um array para a vaga:
- empresa;
- cargo disponivel;
- requisitos;
- salário;
- modalidade.

****** Compatibilidade:
- Oque deve ser realizado:
-- Percorrer as habilidades do candidato;
-- Percorrer os requisitos da vaga;
-- Separar habilidades encontradas e faltandes;
-- Calcular percentual de compatibilidade.

>> compatibilidade = (habilidades encontradas / total de requisitos) * 100

****** Desenvolver no Array
-- filter()
- utilizar em habilidades compativeis e 
- habilidades faltantes

-- map()
- utilizar para percorrer as vagas e  
- gerar lista de resultados.

-- reduce
- usar para encontrar a vaga mais compatível

-- POO
- criar a classe = vaga
- criar herança (facilitar a reutilização de codigo)

    ## FOCO: reutilizar o código e organizar melhor os dados ##

-- CALLBACK
- Utilizar a função callback ao finalziar as análises para exibir uma mensagem final personalizada.


#### ORGANIZAÇÃO ####
Etapas do desenvolvimento:
1. Estrutura inicial
2. Dados do candidato
3. Dados da vaga
4. Compatibilidade
5. Classificação
6. Método array
7. POO
8. Callback
9. Closure
10. Promisse
11. Async/Await
12. Testes finais
13. Validação - Repositório
