const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=> res.send('<h1> How are you? sir </h1>'))

app.get('/api/products', (req, res)=> {
    res.json([
        {
            name: 'iPhone', price: 800
        },
        {
            name: 'iPad', price: 650
        },
        {
            name: 'iWatch', price: 750
        }

    ])
})

app.get('/next_page', (req, res)=> res.sendFile( __dirname+'/template/base.html'))

app.listen(port, ()=> console.log("Example app"))


