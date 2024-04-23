var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views','./views');

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando...");

//===FUNÇÕES===//

app.get('/', function (requisicao, resposta){ // Redireciona para a página de projetos
    resposta.redirect('Project.html')
})

app.post('/cadastra', function(req, res){
    var newUser = req.body.newUser;
    var newPass = req.body.newPass;
})

app.post('/login', function(req, res){
    var currentUser = req.body.currentUser;
    var currentPass = req.body.currentPass;
    var enter = "Falha!";

    if(currentUser == newUser && currentPass == newPass){
        enter = "Sucesso!";
        res.render('resposta', {currentUser, enter})
    }else{
        res.render('resposta', {currentUser, enter})
    }
})

