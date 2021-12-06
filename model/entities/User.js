function Usuario(nome, senha,email, id) {
    this.id = id;
    this.nome = nome;
    this.senha = senha;
    this.email = email;
}
module.exports = Usuario;