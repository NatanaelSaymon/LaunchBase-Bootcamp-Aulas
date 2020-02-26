//OBJETOS

const aluno01 = {
    nome: "Natan",
    nota: 8.5
}

const aluno02 = {
    nome: "Suellen",
    nota: 9.9
}

const aluno03 = {
    nome: "Cacau",
    nota: 6.8
}

//ACESSANDO OS PROPRIEDADES DOS OBJETOS

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

console.log (`Media dos alunos ${media}`)