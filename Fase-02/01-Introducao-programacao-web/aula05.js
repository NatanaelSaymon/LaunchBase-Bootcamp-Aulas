//ARRAY (valores agrupados em uma unica variavel)

const alunos = [
    {
        nome: "Natan",
        nota: 8.7
    },
    {
        nome: "Suellen",
        nota: 9.8
    },
    {
        nome: "Cacau",
        nota: 5.5
    }
]

//ACESSANDO OS VALORES DO ARRAY POR POSIÇÃO - POSIÇÃO INICIAL DO ARRAY "0"

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

console.log (`Media dos alunos ${media}`)