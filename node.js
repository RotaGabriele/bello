const express = require('express')
const cors = require('cors')
const fs = require('fs/promises')

let generi =[]
let film = []
async function caricaFilm() {
    const contenuto = await fs.readFile('output.json', { encoding: 'utf-8' })
    
    
    film = JSON.parse(contenuto)
}
async function caricaGeneri() {
    const contenuto1 = await fs.readFile('generi.json', { encoding: 'utf-8' })
    
    
    generi = JSON.parse(contenuto1)
}
caricaFilm()
caricaGeneri()

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('ciao')
})

app.get('/film/year/:year', (req,res) => {
    const year = parseInt(req.params.year)
    res.send(film.filter(film => film.year == year))
})

app.get('/film/runtime/:min/:max', (req,res) => {
    const min = parseInt(req.params.min)
    const max = parseInt(req.params.max)
    res.send(film.filter(film => film.runtime >= min && film.runtime <= max))
})
app.get('/categories', (req,res)=> {
    res.send(generi)
})

app.get('/film/', (req,res) => {
    let filmScelti=[]
    const min = parseInt(req.query.min)
    const max = parseInt(req.query.max)
    const categoria=req.query.categoria

    console.log({ min, max, categoria })

    for(const pellicola of film) {
        if(pellicola.runtime < max && pellicola.runtime > min && pellicola.categories && pellicola.categories.includes(categoria)) {
            filmScelti.push(pellicola)
        }
    }  

    res.send(filmScelti)
}
)
app.get('/utenti' ,(req,res)=> {

})




app.listen(8080, () => console.log('fuzniono'))