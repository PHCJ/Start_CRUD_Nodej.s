const prodDb = require('../../model/repositories/prodDB');

module.exports = function(app){
app.post('/cadProd/salvar', (req, res) => {
   try {
        prodDb.insertProd({
            descricao: req.body.descricao,
            estoqueMin: req.body.estoqueMin, 
            estoqueMax: req.body.estoqueMax
        });
        res.render('cadProd', { title: 'cadProd', mensagem: 'Produto Cadastrado com sucesso' });
   } catch (error) {
        console.log(error);
        res.render('cadProd', { title: 'cadProd', mensagem: 'Erro no cadastrado' });
   }
  
  });

app.get('/cadProd', (req, res) => {
  res.render('cadProd', { title: 'cadProd', mensagem: null });
});

app.get('/delete/produto/:id', async (req, res, next) =>{
     try{
       var id = req.body.id;
       await prodDb.deleteProd(id);
       var embrulho = await prodDb.selectProd();
       res.render('listProd', {mensagem: 'Produto excluído com sucesso' , embrulho});
     } catch (err) {
       next(err);
     }
   
   });
   
     app.get('/listProd', async (req, res, next) => {
          try {
               const embrulho = await prodDb.selectProd();
               res.render('listProd', { mensagem: 'Lista de produtos', embrulho});
          }catch (err) {
               next(err);
          }
     });
}