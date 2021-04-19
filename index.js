import setMessage from './ej1.js'
import randomNums from './ej2.js'
import getInfo from './ej3.js'
import operation from './ej4.js'
import express from 'express';

const app = express();
app.set('PORT', 8080)

const PORT = process.env.PORT || app.get('PORT')

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})

app.get('/', (req, res) => {
    let message = setMessage(new Date().getHours())
    res.send(`<h1>${message}</h1>`)
})

app.get('/random', (req, res) => {
    res.json(randomNums())
})

app.get('/info',async (req, res) => {
    res.send(await getInfo())
})

app.get('/operaciones',async (req, res) => {
    res.send(operation((req.query)))
}) 
