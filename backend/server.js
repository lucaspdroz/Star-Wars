const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3001

app.use(cors())

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(
        {
            "birth_year": "19BBY",
            "eye_color": "Blue",
            "char_img": "http://localhost:3001/images/luke.jpg",
            "film": "http://localhost:3001/images/2.jpg",
            "films": [
                {
                    "title": "the phantom menance",
                    "id_chapter": "I",
                    "cover": "http://localhost:3001/images/1.jpg",
                },
                {
                    "title": "attack of the clones",
                    "id_chapter": "II",
                    "cover": "http://localhost:3001/images/2.jpg",
                },
            ],
            "gender": "Male",
            "hair_color": "Blond",
            "height": "172",
            "homeworld": "Earth",
            "mass": "77",
            "name": "Luke Skywalker",
            "skin_color": "Fair",
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-10T13:52:43.172000Z",
            "species": [
                "https://swapi.dev/api/species/1/"
            ],
        })
})


app.get('/movie', (req, res) => {
    res.send(
        {
            "id_chapter": "IV",
            "title": "star Wars",
            "text_crawl": "bla\nasdsadasd"
        })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})