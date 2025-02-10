# API de Autenticação com Node.js, React e SendGrid

Esta é uma API de autenticação desenvolvida com **Node.js**, **React**, **PostgreSQL** e **SendGrid**. Ela contém três telas principais: **Signin**, **Signup** e **Validate**. O objetivo da aplicação é permitir que os usuários se cadastrem, confirmem o e-mail e sejam adicionados ao banco de dados.

## Passos para Configuração

# 1. Clone os Repositórios

git clone https://github.com/cardoso-m/frontend-sendgrid
git clone https://github.com/cardoso-m/backend-sendgrid.git

# 2. Instale as Dependências do Backend

cd backend
npm install

# 3. Crie o Arquivo .env

touch .env

# Abra o arquivo .env e adicione as seguintes configurações:

echo "## Banco de dados
DB_HOST = '127.0.0.1'
DB_NAME = 'sendgrid'
DB_USER = 'postgres'
DB_PORT = '3000'
DB_PASS = 'SUA_SENHA'

## SendGrid
EMAIL = 'SEU_EMAIL'
SENDGRID_API_KEY = 'SUA_API_KEY' # Gere sua chave no SendGrid (https://sendgrid.com/)
" > .env

# 4. Configuração do Banco de Dados

# Acesse o pgAdmin e crie o banco de dados chamado 'sendgrid'.
# Preencha as credenciais no arquivo .env conforme mostrado acima.

# 5. Configuração do SendGrid

# Crie uma conta no SendGrid (https://sendgrid.com/) e valide seu e-mail.
# Após isso, gere sua API Key no painel do SendGrid (https://app.sendgrid.com/settings/api_keys).
# Copie a chave gerada e cole-a no arquivo .env na chave SENDGRID_API_KEY.

# 6. Rodando a Migração e Iniciando o Projeto

npm run migrate
npm run dev

# 7. Acessando a Aplicação

# A aplicação possui três rotas principais:
# - /signin: Onde o usuário adiciona seu nome, email e senha.
# - /signup: Tela de cadastro com a opção de "Cadastrar".
# - /validate: Tela para inserir o código enviado ao e-mail.

# Após o cadastro na rota /signin, um código de verificação será enviado para o e-mail informado.
# O usuário precisa inserir o código na rota /validate para completar o cadastro e ser adicionado ao banco de dados.
