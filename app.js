import express from 'express'
import 'dotenv/config'

const app = express()

app.get('/', function(req, res) {
    res.send('informacion')
})

app.use((req,res) => {
    res.status(404).send('No se encontro la pagina')
})

console.log(process.env.HTTP_NAME);
app.listen({
    hostname: process.env.HTTP_NAME,
    port: process.env.HTTP_PORT
}, () => {
    console.log(`ejecutando en la direccion: http://${process.env.HTTP_NAME}:${process.env.HTTP_PORT}`);
})

