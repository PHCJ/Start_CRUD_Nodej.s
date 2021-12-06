const db = require("../services/db");
const Usuario = require("../entities/User");

async function insertUser(usuario){
    const conn = await db.connect();
    const sql = 'INSERT INTO usuario(nome,email,senha) VALUES (?,?,?);';
    const values = [usuario.nome, usuario.email, usuario.senha];
    return await conn.query(sql, values);
}

async function selectUser(){
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM usuario;');
    return rows;
}

async function deleteUser(id){
    const conn = await db.connect();
    const sql = 'DELETE FROM usuario where id=?;';
    return await conn.query(sql, [id]);
}

async function updateUser(id, usuario){
    const conn = await db.connect();
    const sql = 'UPDATE usuario SET nome=?, senha=? WHERE id=?';
    const values = [usuario.nome, usuario.senha, usuario.email,  id];
    return await conn.query(sql, values);
}

module.exports = {selectUser, insertUser, deleteUser, updateUser}