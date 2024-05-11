const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);
connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ', err);
        return;
    }
    console.log('Conectado ao banco de dados com sucesso.');

    connection.query(`
        CREATE TABLE IF NOT EXISTS peaples (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
    `, err => {
        if (err) {
            console.error('Erro ao criar a tabela: ', err);
            return;
        }
        console.log('Tabela criada ou já existente.');

        connection.query('SELECT COUNT(*) AS count FROM peaples', (err, results) => {
            if (err) {
                console.error('Erro ao contar dados: ', err);
                return;
            }
            if (results[0].count === 0) {
                connection.query(`
                    INSERT INTO peaples (name) VALUES ('Malvo'), ('Greg'), ('Cris'), ('Julius');
                `, err => {
                    if (err) {
                        console.error('Erro ao inserir dados: ', err);
                    } else {
                        console.log('Dados iniciais inseridos com sucesso.');
                    }
                });
            } else {
                console.log('Dados já existem, não inserir novamente.');
            }
        });
    });
});

app.get('/', (req, res) => {
    connection.query('SELECT name FROM peaples', (err, results) => {
        if (err) {
            console.error('Erro ao buscar dados: ', err);
            res.status(500).send('Erro ao buscar dados');
            return;
        }

        const title = '<h1>Full Cycle Rocks!</h1>';
        const list = `<ul>${results.map(p => `<li>${p.name}</li>`).join('')}</ul>`;
        res.send(title + list);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
