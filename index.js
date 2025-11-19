const express = require("express")
const app = express()
app.use(express.json())

const cardapio = [
    // --- MARMITAS ---
    {
        id: 1,
        tipo: "marmita",
        nome: "Marmita P",
        descricao: "Arroz, feijão, batata frita e bife a cavalo",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDyzzpPqkoKVw04MekB3DMlXJCR95b0WDSQ&s",
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
        tipo: "marmita",
        nome: "Marmita Fitness",
        descricao: "Arroz integral, frango grelhado, legumes cozidos e salada verde",
        foto: "https://tamofiit.com.br/wp-content/uploads/2024/11/IMG_2717-scaled.jpg",
        preco: 22.90
    },

    // --- SALADAS ---
    {
        id: 5,
        tipo: "salada",
        nome: "Salada Completa",
        descricao: "Alface, tomate, cenoura ralada, milho, ervilha e ovo cozido",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPkaHHmn05zWPNf3pDsm8KdBeKrXP2hu1gQ&s",
        preco: 12.00
    },
    {
        id: 6,
        tipo: "salada",
        nome: "Salada Verde",
        descricao: "Alface, rúcula, agrião e tomate cereja",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrJ2zZdhDGekljscuJhZjknktDGP5Vq_C1g&s",
        preco: 10.00
    },
    {
        id: 7,
        tipo: "salada",
        nome: "Salada Caesar",
        descricao: "Alface americana, frango grelhado, croutons e molho caesar",
        foto: "https://www.seara.com.br/wp-content/uploads/2025/09/salada-caesar-com-frango-portal-minha-receita.jpg",
        preco: 15.00
    },
    {
        id: 8,
        tipo: "salada",
        nome: "Salada Tropical",
        descricao: "Alface, manga, frango, cenoura e molho de maracujá",
        foto: "https://vitat.com.br/receitas/images/recipeshandler.jpg?id=217&tipo=r&default=s",
        preco: 14.00
    },

    // --- BEBIDAS ---
    {
        id: 9,
        tipo: "bebida",
        nome: "Refrigerante Lata",
        descricao: "Lata 350ml",
        foto: "https://alloydeliveryimages.s3.sa-east-1.amazonaws.com/item_images/11542/669add5769e6e2x9g4.webp",
        preco: 6.00
    },
    {
        id: 10,
        tipo: "bebida",
        nome: "Suco Natural",
        descricao: "Sabores: laranja, limão ou maracujá",
        foto: "https://mocabonitabar.com.br/wp-content/uploads/2024/09/Como-guardar-suco-natural-800x445.jpg",
        preco: 8.00
    },
    {
        id: 11,
        tipo: "bebida",
        nome: "Água Mineral",
        descricao: "Garrafa 500ml",
        foto: "https://www.delgo.com.br/imagens/como-e-feito-o-envase-de-agua-mineral.jpg",
        preco: 3.50
    },
    {
        id: 12,
        tipo: "bebida",
        nome: "Chá Gelado",
        descricao: "Limão ou pêssego — 300ml",
        foto: "https://image.tuasaude.com/media/article/bs/as/cha-gelado_73312.jpg",
        preco: 7.00
    }
]



// mostrar todos os itens
app.get('/:tipo', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const rota = req.params.tipo
    res.send(cardapio.filter(produto => produto.tipo + 's' == rota))
})

// app.get('/marmitas', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     const cardapioFiltrado = cardapio.filter(produto => produto.tipo == 'marmita')
//     res.send(cardapioFiltrado)
// })

// app.get('/saladas', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     const cardapioFiltrado = cardapio.filter(produto => produto.tipo == 'salada')
//     res.send(cardapioFiltrado)
// })

// app.get('/bebidas', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     const cardapioFiltrado = cardapio.filter(produto => produto.tipo == 'bebida')
//     res.send(cardapioFiltrado)
// })

// Mostrar um item
app.get('/:tipo/:id', (req, res) => {
    const id = req.params.id
    res.send(cardapio[id - 1])
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