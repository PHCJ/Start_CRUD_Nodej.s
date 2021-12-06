const seguranca = require('../../model/components/seguranca');
const userDb = require('../../model/repositories/userDB');

module.exports = function(app){
app.post('/cadastro/salvar', (req, res) => {
   try {
        userDb.insertUser({
            nome: req.body.nome ,
            email: req.body.email, 
            senha: seguranca.ocultarSenha( req.body.senha)
        });
        res.render('cadUser', { title: 'cadUser', mensagem: 'Usuário Cadastrado com sucesso' });
   } catch (error) {
        console.log(error);
        res.render('cadUser', { title: 'cadUser', mensagem: 'Erro no cadastrado' });
   }
  
  });

app.get('/cadUser', (req, res) => {
  res.render('cadUser', { title: 'cadUser', mensagem: null });
});

app.get('/delete/usuario/:id', async (req, res, next) =>{
     try{
       id = req.body.id;
       await userDb.deleteUser(id);
       var embrulho = await userDb.selectUser();
       res.render('listUser', {mensagem: 'Usuario excluído com sucesso' , embrulho});
     } catch (err) {
       next(err);
     }
   
   });
   
     app.get('/listUser', async (req, res, next) => {
          try {
               const embrulho = await userDb.selectUser();
               res.render('listUser', { mensagem: 'Lista de usuários', embrulho});
          }catch (err) {
               next(err);
          }
     });
}

