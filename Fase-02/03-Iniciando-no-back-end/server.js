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

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){ //Fazendo uma filtragem usando a função FIND para encontrar o "video"
        if(video.id == id){ //Se ele encontrar o id, ele vai inserir na variavel
            return true
        }

        return res.render('video', { item: video }) //Se ele encontrou o video, vai renderizar uma pagina nova!
    })

    if(!video){ //se ele não encontrou, ele vai retornar uma mensagem de erro.
        return res.send("Video not found!")
    }
})

server.listen(5000, function(){
    console.log("server is runnign")
})