function Produto(descricao, estoqueMin ,estoqueMax, id) {
    this.id = id;
    this.descricao = descricao;
    this.estoqueMin = estoqueMin;
    this.estoqueMax = estoqueMax;
}
module.exports = Produto;