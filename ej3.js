import fs from 'fs';

const getInfo = async () => {
    try {
        const data = await fs.promises.readFile('./package.json', 'utf-8')
        let info = {
            contenidoStr: data,
            contenidoObj: JSON.parse(data),
            size: data.length
        }
        console.log('Info:\n', info);
        await fs.promises.writeFile('./info.txt', JSON.stringify(info, null, 4))
    } catch (error) {
        console.log(`Error en lectura de archivo: ${error}`)
    }
}

export default getInfo;