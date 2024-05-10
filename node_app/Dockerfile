# Usar uma versão LTS do Node.js
FROM node:18

# Configura o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Executar npm init -y para criar um package.json padrão
# Instalar as dependências necessárias
RUN npm init -y && npm install express mysql

# Copiar o aplicativo para o diretório de trabalho
COPY . .

# Expõe a porta que o app usa
EXPOSE 3000

# Comando para executar o app
CMD ["node", "index.js"]