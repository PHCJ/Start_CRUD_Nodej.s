function ocultarSenha(senha) {
    var sha1 = require('sha1');
    var hash = sha1(senha);
    return hash;
}
module.exports = {ocultarSenha}