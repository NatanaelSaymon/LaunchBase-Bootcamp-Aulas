//ESTRUTURA DE REPETIÇÃO

//FUNÇÕES

const alunosTurmaA = [{
        nome: "Pedro",
        nota: 4.5
    },
    {
        nome: "Mateus",
        nota: 6.2
    },
    {
        nome: "João",
        nota: 2.3
    }
]

const alunosTurmaB = [{
        nome: "Natan",
        nota: 4.3
    },
    {
        nome: "Suellen",
        nota: 6.9
    },
    {
        nome: "Cacau",
        nota: 2.7
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)

function enviaMensagem(media, turma) {
    //SE A MEDIA FOR MAIOR QUE 5, PARABENIZAR A TURMA
    if (media >= 5) {
        console.log(`A media da ${turma}, foi de ${media.toFixed(2)} Parabens!`)
    } else {
        console.log(`A media da ${turma}, foi de ${media.toFixed(2)} Estudem mais!`)
    }
}

enviaMensagem(media1, 'TurmaA')
enviaMensagem(media2, 'TurmaB')


//Marcar aluno como reprovado se a nota for menor que 5 e tbm enviar uma msg

function marcarComoReprovado(aluno) {
    aluno.reprovado = false
    if (aluno.nota < 5) {
        aluno.reprovado = true
    }
}

marcarComoReprovado(alunosTurmaA)
marcarComoReprovado(alunosTurmaB)

function enviarMensagemDeReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O Aluno ${aluno.nome} está REPROVADO!`)
    } else {
        console.log(`O Aluno ${aluno.nome} está APROVADO!`)
    }
}

function alunoReprovado(alunos) {
    //Para cada "aluno" da lista de alunos, faça!
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemDeReprovado(aluno)
    }
}

alunoReprovado(alunosTurmaA)
alunoReprovado(alunosTurmaB)
