const testFolder = './movies/';
const fs = require('fs/promises');


leggiAnni()
async function leggiAnni() {
    const anni = await fs.readdir(testFolder)

    let promesse = []
    for (const anno of anni) {
        const percorso = testFolder + anno
        promesse.push(leggiCartella(percorso))
    }

    await Promise.all(promesse)

    fs.writeFile('output.json', JSON.stringify(tuttiFilm), { encoding: 'utf-8' })
}

let tuttiFilm = [];


async function leggiCartella(path) {
    const files = await fs.readdir(path)

    let promesse = []
    
    for (const file of files) {
        const percorso = path + "/" + file
        // console.log(percorso)
        promesse.push(leggiFilm(percorso))
    }

    await Promise.all(promesse)
}


async function leggiFilm(file) {
    const contenuto = await fs.readFile(file, { encoding: 'utf-8' })

    const film = JSON.parse(contenuto)
    tuttiFilm.push(film)
}
