# Desafio Nginx com Node.js

## Descrição

Este projeto é parte de um desafio prático com o objetivo de implementar um ambiente utilizando Docker que envolve três principais tecnologias: Nginx, Node.js e MySQL. O Nginx é configurado como um proxy reverso que direciona as requisições HTTP para uma aplicação Node.js, a qual interage com um banco de dados MySQL para registrar e recuperar nomes.

## Funcionalidade

- **Nginx**: Atua como um proxy reverso, redirecionando as requisições para o servidor Node.js.
- **Node.js**: Aplicação backend que insere um novo nome no banco de dados a cada requisição e retorna uma lista de todos os nomes cadastrados.
- **MySQL**: Banco de dados que armazena os nomes inseridos pela aplicação Node.js.

## Como Executar

Para rodar este projeto, você precisará ter o Docker e o Docker Compose instalados em sua máquina. Siga os passos abaixo para configurar e executar o ambiente:

### Pré-requisitos

- Docker
- Docker Compose

### Instruções

1. Clone o repositório para a sua máquina local:

```
git clone [URL_DO_REPOSITORIO]

```

2. Navegue até o diretório do projeto:
3. Construa e inicie os contêineres usando o Docker Compose:
````
docker-compose up --build
````
4.Acesse a aplicação via navegador ou utilizando um cliente HTTP como o cURL:
````
curl http://localhost:8080
````

Você deverá ver a mensagem "<h1>Full Cycle Rocks!</h1>" seguida pela lista de nomes cadastrados no banco de dados.

## Arquitetura

* nginx: O contêiner do nginx redireciona todas as requisições recebidas na porta 8080 para a aplicação Node.js executando na porta 3000.
* node_app: Este contêiner executa a aplicação Node.js, que responde às requisições do nginx e interage com o banco de dados MySQL.
* db: Contêiner MySQL onde os nomes são armazenados.