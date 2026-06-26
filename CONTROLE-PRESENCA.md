# Controle de presenca

Use Google Forms para a confirmacao principal e Google Sheets para acompanhar as respostas.

Campos recomendados para o formulario:

1. Nome de quem esta confirmando
2. Vai comparecer?
   - Sim
   - Nao
3. Quantidade de adultos
4. Quantidade de criancas
5. Nome das criancas
6. Telefone/WhatsApp
7. Observacao

Depois de criar o formulario:

1. Clique em `Enviar`.
2. Copie o link publico do formulario.
3. Cole esse link em `script.js`, na variavel `googleFormUrl`.
4. Publique novamente no GitHub.

Enquanto `googleFormUrl` estiver vazio, o botao principal usa WhatsApp como fallback.

