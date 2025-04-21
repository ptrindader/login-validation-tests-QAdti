# Desafio Técnico - Estágio QA - dti

## Objetivo
Criar e automatizar até 3 possíveis cenários de teste de um projeto web baseando na página de login do site “Automation Practice”.

## Link da Página
http://automationpractice.pl/index.php?controller=authentication&back=my-account (Automation Practice)

## Ferramentas Utilizadas
- **Framework:** Cypress (JavaScript - Node.js v22.14.0)
- **IDE:** VSCode

## Cenários de Teste
### **Cenário 1: verificar login sem a senha**
- **Dado que** o usuário esteja na página de login “automation practice” e tendo conhecimento do email de uma determinada conta já registrada anteriormente no site, seja sua ou não;  
- **Quando** o usuário inserir no campo “Email Address” da box “Already registered?” o email já registrado anteriormente (pelo usuário ou não) e clicar no botão “Sign in” sem ter preenchido o campo de senha (“Password”);
- **Então** a página deve retornar uma mensagem de erro frisando a obrigatoriedade da senha e pedindo o preenchimento desse campo sem apagar o campo do email.

### **Cenário 2: verificar registro de conta já previamente registrada**
- **Dado que** o usuário esteja na página de login “automation practice”, já possuindo ao menos uma conta registrada anteriormente;
- **Quando** o usuário inserir um email já registrado anteriormente no campo “Email Address” na box “Create an Account” e clicar no botão “Create an account”;
- **Então** a página deve retornar uma mensagem de erro indicando que a conta já foi criada anteriormente e pedindo que o usuário insira o login e a senha na box “Already registered?”.


### **Cenário 3: verificar a recuperação de senha com um email inválido**
- **Dado que** o usuário esteja na página de login “automation practice”;
- **Quando** o usuário clicar no botão “Forgot your password?”, for redirecionado para a página Forgot your password? e inserir no campo “Email address” um email que não tenha registro no site;
- **Então** a página deve retornar uma mensagem de erro indicando que aquele email inserido não está associado a uma conta que tenha sido criada previamente no site.
