// bancoDeDados.js
//
// Este arquivo é o único lugar do projeto que "sabe" SQL.
// Vocês não precisam entender cada linha por enquanto — pensem nele
// como uma caixinha com duas alavancas: SALVAR e LISTAR.
//
// Quem usa este arquivo (o server.js) só chama as funções abaixo,
// sem escrever nenhum SQL.

const Database = require("better-sqlite3");

// Isso cria (ou abre, se já existir) um arquivo chamado "dados.sqlite"
// na mesma pasta do projeto. Todo o banco de dados fica dentro desse
// único arquivo — não precisa instalar nem configurar nenhum servidor
// de banco de dados separado.
const db = new Database("dados.sqlite");

// Criamos a tabela "usuarios" caso ela ainda não exista.
// Isso roda automaticamente toda vez que o servidor liga.
db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        idade INTEGER NOT NULL,
        criadoEm TEXT DEFAULT CURRENT_TIMESTAMP
    )
`);

// Função para salvar um novo usuário no banco.
// Recebe os três dados já prontos e devolve o registro criado.
function salvarUsuario(nome, email, idade) {
    const comando = db.prepare(
        "INSERT INTO usuarios (nome, email, idade) VALUES (?, ?, ?)"
    );
    const resultado = comando.run(nome, email, idade);

    // resultado.lastInsertRowid é o id que o banco gerou automaticamente
    return {
        id: resultado.lastInsertRowid,
        nome,
        email,
        idade
    };
}

// Função para listar todos os usuários já cadastrados,
// dos mais recentes para os mais antigos.
function listarUsuarios() {
    const comando = db.prepare(
        "SELECT * FROM usuarios ORDER BY id DESC"
    );
    return comando.all();
}

// Exportamos as duas funções para que o server.js possa usá-las.
module.exports = {
    salvarUsuario,
    listarUsuarios
};
