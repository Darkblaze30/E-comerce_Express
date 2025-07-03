import express from 'express'
import 'dotenv/config'
import {categoriesRouter, paymentMethodRouter, productRouter, salesRouter, userRouter} from './routers/index.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const corsOptions = {
  origin: 'http://localhost:5173', // o el dominio de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // si usas cookies/autenticación
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(`${import.meta.dirname}/public`))

app.use('/categories', categoriesRouter)
app.use('/paymentMethod', paymentMethodRouter)
app.use('/products', productRouter)
app.use('/sales', salesRouter)
app.use('/users', userRouter)

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

