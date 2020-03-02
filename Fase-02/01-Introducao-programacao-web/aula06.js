//FUNÇÕES

const alunosTurmaA = [
    {
        nome: "Aluno 1",
        nota: 5.8
    },
    {
        nome: "Aluno 2",
        nota: 4.9
    },
    {
        nome: "Aluno 3",
        nota: 4.3
    }
]

const alunosTurmaB = [
    {
        nome: "Aluno 4",
        nota: 3.8
    },
    {
        nome: "Aluno 5",
        nota: 2.4
    },
    {
        nome: "Aluno 6",
        nota: 4
    },
]

function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)

function enviaMensagem(media, turma){
    //SE A MEDIA FOR MAIOR QUE 5, PARABENIZAR A TURMA
    if(media >= 5){
        console.log(`A media da ${turma}, foi de ${media}. Parabens!`)
    }else{
        console.log(`A media da ${turma}, foi de ${media}. Estudem mais!`)
    }
}

enviaMensagem(media1, 'TurmaA')
enviaMensagem(media2, 'TurmaB')