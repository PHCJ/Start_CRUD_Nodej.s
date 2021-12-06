const db = require("../services/db");
const Produto = require("../entities/Produto");

async function insertProd(produto){
    const conn = await db.connect();
    const sql = 'INSERT INTO produto(descricao,estoque_minimo,estoque_maximo) VALUES (?,?,?);';
    const values = [produto.descricao, produto.estoqueMin, produto.estoqueMax];
    return await conn.query(sql, values);
}

async function selectProd(){
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM produto;');
    return rows;
}

async function deleteProd(id){
    const conn = await db.connect();
    const sql = 'DELETE FROM produto where id=?;';
    return await conn.query(sql, [id]);
}

async function updateProd(id, descricao, quantMin, quantMax){
    const conn = await db.connect();
    const sql = 'UPDATE produto SET descricao=?, quantMin=?, quantMax=? WHERE id=?';
    const values = [produto.descricao, produto.estoqueMin, produto.estoqueMax,  id];
    return await conn.query(sql, values);
}

module.exports = {selectProd, insertProd, deleteProd, updateProd}