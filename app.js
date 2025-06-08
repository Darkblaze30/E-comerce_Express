import express from 'express'
import 'dotenv/config'
import categoriesRouter from './routers/categories.router.js'
import bodyParser from 'body-parser'


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(`${import.meta.dirname}/public`))

app.get('/', function(req, res) {
    res.send('informacion')
})

app.use('/categories', categoriesRouter)

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

