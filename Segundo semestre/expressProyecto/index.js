const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.sendFile('./static/index.html', {
        root:__dirname
    })
})

app.listen(3000)
console.log(`Servidor activo en puerto ${3000}`)