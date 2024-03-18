# Use a imagem oficial do Node.js
FROM node:latest

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e o arquivo de configuração do TypeScript para o diretório de trabalho
COPY package.json .
COPY tsconfig.json .

# Instale as dependências do projeto
RUN npm install

# Copie todo o código-fonte para o diretório de trabalho
COPY . .

# Compile o código TypeScript para JavaScript
RUN npm run build

# Exponha a porta 3000 para acesso externo
EXPOSE 3000

# Comando padrão a ser executado ao iniciar o contêiner
CMD ["node", "dist/app.js"]
