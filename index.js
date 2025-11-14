const express = require("express")
const app = express()
app.use(express.json())

const cardapio = ["banana", "maçã"]

app.get('/cardapio', (req, res) => {
    res.send(cardapio)
})

app.get('/cardapio/tamanho', (req, res) => {
    res.send(`O tamanho do cardápio é ${cardapio.length}`)
})

app.get('/cardapio/:id', (req, res) => {
    const id = req.params.id
    res.send(cardapio[id - 1])
})

app.post('/cardapio/inserir', (req, res) => {
    const produto = req.body.produto.trim()
    cardapio.push(produto)
    res.send(`${produto} inserido com sucesso!`)
})

app.put('/cardapio/editar/:id', (req, res) => {
    const id = req.params.id
    const nomeNovo = req.body.produto
    const nomeAntigo = cardapio[id - 1]
    cardapio[id - 1] = nomeNovo
    res.send(`${nomeAntigo} atualizado para ${nomeNovo}`)
})

app.delete('/cardapio/apagar/:id', (req, res) => {
    const id = req.params.id
    const produto = cardapio[id - 1]
    cardapio.splice(id - 1, 1)
    res.send(`${produto} removido com sucesso!`)
})

app.listen(3000)