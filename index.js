const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const lista = ['Java', 'Kotlin', 'Android']
//Endpoint Read all [GET] /personagem 
app.get('/personagem', function (req, res){
    res.send(lista.filter(Boolean))
})

//Endpoint Read By ID [GET]/personagem/:id
app.get('/personagem/:id', function (req, res){
    //acessamos o parametro de rota id
    const id = req.params.id

    //acessar o item da lista usando o ID - 1
    const item = lista[id - 1]
    //Enviamos o item como resposta
    res.send(item)
})

//Sinalizar para Express q estou usando JSON no body
app.use(express.json())

//Endpoint Create [POST]/personagem
app.post('/personagem', function (req, res) {
    //acessamos o body da requisição
    const body = req.body

    //acessamos a propiedade nome do body
    const novoItem = body.nome
    
    //testar pra ver o que esta vindo
    //console.log(body)

    //adicionar na lista
    lista.push(novoItem)

    //exibir uma msg de sucesso
    res.send('Item adicionado com sucesso!' + novoItem)
} )

//Endpoint Update [PUT]/personagem/:id
app.put('/personagem/:id', function (req, res){
    //acessamos o ID dos parametros da rota
    const id = req.params.id

    //acessamos o body da requisição
    const body = req.body
    
    //acessamos a propriedade 'nome' do body
    const novoItem = body.nome
    
    //atualizamos na lista o novoItem pelo ID - 1
    lista[id - 1] = novoItem

    //enviamos uma resposta de sucesso
    res.send('Item atualizado com sucesso! : ' +id+ '-' + novoItem)
})

//Endpoint Delete [DELETE]/personagem/:id
app.delete('/personagem/:id', function (req, res){
    //acessamos o parametro de rota
    const id =  req.params.id

    //remover o item da lista usando o id - 1
    delete lista[id - 1]

    //Enviamos uma msg sucesso
    res.send('Item deletado com sucesso! ' + id)
})

app.listen(3000)