const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3001

app.use(cors())

app.use(express.static('public'));

app.get('/character', (req, res) => {
    res.send(
        {
            "birth_year": "19BBY",
            "eye_color": "Blue",
            "char_img": "http://localhost:3001/images/luke.webp",
            "height":"172",
            "actor":"mark hamill",
            "films": [
                {
                    "title": "attack of the clones",
                    "id_chapter": "II",
                    "cover": "http://localhost:3001/images/2.jpg",
                    "music": "http://localhost:3001/music/MainTheme.mp3",
                    "crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi...."
                },
                {
                    "title": "a new hope",
                    "id_chapter": "IV",
                    "cover": "http://localhost:3001/images/4.jpg",
                    "music": "http://localhost:3001/music/MainTheme.mp3",
                    "crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy...."
                },
                {
                    "title": "the empire strikes back",
                    "id_chapter": "V",
                    "cover": "http://localhost:3001/images/5.jpg",
                    "music": "http://localhost:3001/music/MainTheme.mp3",
                    "crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
                },
                {
                    "title": "return of the jedi",
                    "id_chapter": "VI",
                    "cover": "http://localhost:3001/images/6.jpg",
                    "music": "http://localhost:3001/music/MainTheme.mp3",
                    "crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy..."
                },
                {
                    "title": "revenge of the sith",
                    "id_chapter": "III",
                    "cover": "http://localhost:3001/images/3.jpg",
                    "music": "http://localhost:3001/music/MainTheme.mp3",
                    "crawl": "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor...."
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