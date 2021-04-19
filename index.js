const express = require('express')
const fs = require('fs');
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

// app.get('/info', (req, res) => {
//     fs.promises.readFile('./package.json', 'utf-8')
//     .then(data=>{
//         let info = {
//             contenidoStr: data,
//             contenidoObj: JSON.parse(data)
//         }
//         console.log('data', data);
//         // console.dir(JSON.parse(data), {depth:5, colors: true})
//     })
//         
// })

const setMessage = hour => {
    let message = 'Buenas Noches!'
    if (hour > 5) {
        if (hour < 12) {
            message = 'Buenos Dias!'
        } else if (hour < 19) {
            message = 'Buenas Tardes!'
        }
    }
    return message
}


function randomNums() {
    let nums = {}
    for (let i = 0; i < 25; i++) {
        const num = Math.floor(Math.random() * 20) + 1
        console.log(num);
        if (!nums.hasOwnProperty(num)) {
            nums = { ...nums, [num]: 1 }
        } else {
            nums[num] = nums[num]+1
        }
    }
    return(nums);
}

 fs.promises.readFile('./package.json', 'utf-8')
    .then(data=>{
        let info = {
            contenidoStr: data,
            contenidoObj: JSON.parse(data),
            size: data.length
        }
        console.log('Info:\n',info);
        return fs.promises.writeFile('./info.txt', JSON.stringify(info,null, 4))
    })
    .catch(error=>console.log(`Error en lectura de archivo: ${error}`))
