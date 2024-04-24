var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views','./views');
app.use(express.static('./public'));

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando...");

//===FUNÇÕES===//

app.get('/', function (requisicao, resposta){ // Redireciona para a página de projetos
    resposta.redirect('Project.html')
})

app.post("/cadastra", function(req, res){
    newUser = req.body.user;
    newPass = req.body.password;
    enter = "Cadastrado com sucesso!"
    res.render('resposta', {newUser, enter})

})

app.post("/login", function(req, res){
    currentUser = req.body.user;
    currentPass = req.body.password;
    enter = "Falha!";

    if(currentUser == newUser && currentPass == newPass){
        enter = "Sucesso!";
        res.render('resposta', {newUser, enter})
    }else{
        res.render('resposta', {newUser, enter})
    }
})