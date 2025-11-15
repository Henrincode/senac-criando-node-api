const express = require("express")
const app = express()
app.use(express.json())

const cardapio = [
    {
        id: 1,
        nome: "Marmita P",
        tipo: "marmita",
        descricao: "Arroz, feijão, batata frita e bife a cavalo",
        foto: "https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/486958553_1079407590871643_4483217887268690525_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nD6g22ZtPH4Q7kNvwFjGEDJ&_nc_oc=AdmXSJ4vwXOCfmWVd318GMrrNHyWxJueNb5DtdOk88yFUhdHtrcN0ABWwUkT54DkDIU&_nc_zt=23&_nc_ht=scontent.fcpq5-1.fna&_nc_gid=xPYDwiwjvQ1SGd13zxsBFw&oh=00_AfhOaEh5c8ztZ2yzSdxGzDsgvM5P5ptu0KZ1EiXe-H_zdQ&oe=691D919D",
        preco: 17.90
    },
    {
        id: 2,
        nome: "Marmita M",
        tipo: "marmita",
        descricao: "Arroz, feijão, batata frita, polenta frita, ovo e bife a cavalo",
        foto: "https://akitem.app/arquivos/produto/europarestaurante/203-84.png?parceria=europarestaurante",
        preco: 20.90
    },
    {
        id: 3,
        nome: "Marmita Feijoada",
        tipo: "marmita",
        descricao: "Feijoada completa com arroz, farofa, couve refogada e torresmo",
        foto: "https://www.meucadernodereceitas.com.br/wp-content/uploads/2021/06/Mamitex-2.jpg",
        preco: 27.90
    },
    {
        id: 4,
        nome: "Salada Completa",
        tipo: "salada",
        descricao: "Alface, tomate, cenoura ralada, milho, ervilha e ovo cozido",
        foto: "https://scontent.fcpq5-1.fna.fbcdn.net/v/t51.75761-15/465695698_18047000795055616_8388178483558220890_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kfgZ8SmtevEQ7kNvwH92AEI&_nc_oc=AdlaEm2Tf_Vzw8PLd3-lFpAeVzBADRUTeE4bxRy-CzJq5iYt3TXp7jBuSWwJ0F9N_do&_nc_zt=23&_nc_ht=scontent.fcpq5-1.fna&_nc_gid=dqwpnlol5c6Pymf6-attHA&oh=00_AfjIkclUZuCSujz5BwKesAVdPO-zPQdcaA1-LcCfNMrNlw&oe=691D98E3",
        preco: 12.00
    },
    {
        id: 5,
        nome: "Refrigerante Lata",
        tipo: "refrigerante",
        descricao: "Lata 350ml",
        foto: "https://alloydeliveryimages.s3.sa-east-1.amazonaws.com/item_images/11542/669add5769e6e2x9g4.webp",
        preco: 6.00
    },
    {
        id: 6,
        tipo: "suco",
        nome: "Suco Natural",
        descricao: "Sabores: laranja, limão ou maracujá",
        foto: "https://mocabonitabar.com.br/wp-content/uploads/2024/09/Como-guardar-suco-natural-800x445.jpg",
        preco: 8.00
    }
]

app.get('/cardapio/:tipo', (req, res) => {
    const tipo = req.params.tipo
    res.send(cardapio.filter(produto => produto.tipo === tipo))
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