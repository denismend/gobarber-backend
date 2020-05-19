# Testes automatizados
Que a nossa aplicação continue funcionando independente do número de novas
funcionalidades e do número de devs no time

  1. Testes unitarios (TDD)
  Testam funcionalidades específicas da nossa aplicação (precisam ser funções puras)

  JAMAIS: chamada à uma API e efeito colateral

  2. Testes de integração
  Testam uma funcionalidade completa, passando por várias camadas da aplicação.

  Route -> Controller -> Service -> Repository -> ...

  3. Testes E2E

  1. Clique no input de email
  2. Preencha denisladeira1@gmail.com
  3. Clique no input de senha
  4. Preencha 123456
  5. Clique no botão 'Logar'
  6. Espero que a página tenha enviado o usuário para o Dashboard

# TDD (Test Driven Development)

- Quando o usuario se cadastrar na aplicação, ele deve receber um email de boas-vindas.
