import express from 'express'
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    // ...
})

app.post('/', (req, res) => {
    // ...
})

app.listen(3000)