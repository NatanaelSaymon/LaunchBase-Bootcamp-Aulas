const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const videos = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views" ,{
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/6643122?s=460&v=4",
        nome: "Mayk Brito",
        role: "Instrutor - Rocketseat",
        description: 'Programador fullstack, focado em trazer o melhor ensino para inicantes em programação. Colaborador da <a href="https://rockeseat.com.br" target="_blank">Rocketseat</a>.',
        links: [
            { name: "Github", url: "https://github.com/maykbrito" },
            { name: "Twitter", url: "https://twitter.com/maykbrito" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/maykbrito/" },
        ]
    }
    return res.render('about', { about : about })
})

server.get("/portfolio", function(req, res){
    return res.render('portfolio', { items: videos })
})

server.listen(5000, function(){
    console.log("server is runnign")
})