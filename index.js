const express = require("express")
const app = express()
app.use(express.json())

const cardapio = [
    {
        id: 1,
        tipo: "marmita",
        nome: "Marmita P",
        descricao: "Arroz, feijão, batata frita e bife a cavalo",
        foto: "https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/486958553_1079407590871643_4483217887268690525_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nD6g22ZtPH4Q7kNvwFjGEDJ&_nc_oc=AdmXSJ4vwXOCfmWVd318GMrrNHyWxJueNb5DtdOk88yFUhdHtrcN0ABWwUkT54DkDIU&_nc_zt=23&_nc_ht=scontent.fcpq5-1.fna&_nc_gid=xPYDwiwjvQ1SGd13zxsBFw&oh=00_AfhOaEh5c8ztZ2yzSdxGzDsgvM5P5ptu0KZ1EiXe-H_zdQ&oe=691D919D",
        preco: 17.90
    },
    {
        id: 2,
        tipo: "marmita",
        nome: "Marmita M",
        descricao: "Arroz, feijão, batata frita, polenta frita, ovo e bife a cavalo",
        foto: "https://akitem.app/arquivos/produto/europarestaurante/203-84.png?parceria=europarestaurante",
        preco: 20.90
    },
    {
        id: 3,
        tipo: "marmita",
        nome: "Marmita Feijoada",
        descricao: "Feijoada completa com arroz, farofa, couve refogada e torresmo",
        foto: "https://www.meucadernodereceitas.com.br/wp-content/uploads/2021/06/Mamitex-2.jpg",
        preco: 27.90
    },
    {
        id: 4,
        tipo: "salada",
        nome: "Salada Completa",
        descricao: "Alface, tomate, cenoura ralada, milho, ervilha e ovo cozido",
        foto: "https://scontent.fcpq5-1.fna.fbcdn.net/v/t51.75761-15/465695698_18047000795055616_8388178483558220890_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kfgZ8SmtevEQ7kNvwH92AEI&_nc_oc=AdlaEm2Tf_Vzw8PLd3-lFpAeVzBADRUTeE4bxRy-CzJq5iYt3TXp7jBuSWwJ0F9N_do&_nc_zt=23&_nc_ht=scontent.fcpq5-1.fna&_nc_gid=dqwpnlol5c6Pymf6-attHA&oh=00_AfjIkclUZuCSujz5BwKesAVdPO-zPQdcaA1-LcCfNMrNlw&oe=691D98E3",
        preco: 12.00
    },
    {
        id: 5,
        tipo: "bebida",
        nome: "Refrigerante Lata",
        descricao: "Lata 350ml",
        foto: "https://alloydeliveryimages.s3.sa-east-1.amazonaws.com/item_images/11542/669add5769e6e2x9g4.webp",
        preco: 6.00
    },
    {
        id: 6,
        tipo: "bebida",
        nome: "Suco Natural",
        descricao: "Sabores: laranja, limão ou maracujá",
        foto: "https://mocabonitabar.com.br/wp-content/uploads/2024/09/Como-guardar-suco-natural-800x445.jpg",
        preco: 8.00
    }
]

// mostrar todos os itens
app.get('/marmitas', (req, res) => {
    res.send(cardapio)
})

// Mostrar um item
app.get('/marmitas/:id', (req, res) => {
    const id = req.params.id
    res.send(cardapio[id - 1])
})

// filtrar por categoria
app.get('/marmitas/:tipo', (req, res) => {
    const tipo = req.params.tipo
    res.send(cardapio.map(produto => produto.tipo === tipo))
})

// Inserir Marmita
app.post('/marmitas', (req, res) => {
    const produto = req.body.produto
    cardapio.push(produto)
    res.send(`${produto.nome} inserido com sucesso!`)
})

// Editar Marmita
app.put('/marmitas/:id', (req, res) => {
    const id = req.params.id
    const nomeNovo = req.body.produto
    const nomeAntigo = cardapio[id - 1]
    cardapio[id - 1] = nomeNovo
    res.send(`${nomeAntigo.nome} atualizado para ${nomeNovo.nome}`)
})

// Apagar Marmita
app.delete('/marmitas/:id', (req, res) => {
    const id = req.params.id
    const produto = cardapio[id - 1]
    cardapio.splice(id - 1, 1)
    res.send(`${produto.nome} removido com sucesso!`)
})

app.listen(3000)