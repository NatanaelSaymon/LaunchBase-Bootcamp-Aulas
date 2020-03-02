//ESTRUTURA DE REPETIÇÃO

//FUNÇÕES

const classA = [{
        name: "Pedro",
        grade: 4.5
    },
    {
        name: "Mateus",
        grade: 6.2
    },
    {
        name: "João",
        grade: 2.3
    }
]

const classB = [{
        name: "Natan",
        grade: 4.3
    },
    {
        name: "Suellen",
        grade: 6.9
    },
    {
        name: "Cacau",
        grade: 2.7
    }
]

function calculateAverage(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const media = sum / students.length
    return media
}

function sendMessage(media, turma) {
    //SE A MEDIA FOR MAIOR QUE 5, PARABENIZAR A TURMA
    if (media >= 5) {
        console.log(`A media da ${turma}, foi de ${media.toFixed(2)} Parabens!`)
    } else {
        console.log(`A media da ${turma}, foi de ${media.toFixed(2)} Estudem mais!`)
    }
}

//Marcar student como reprovado se a grade for menor que 5 e tbm enviar uma msg

function marcarComoReprovado(student) {
    student.reprovado = false
    if (student.grade < 5) {
        student.reprovado = true
    }
}

function enviarMensagemDeReprovado(student) {
    if (student.reprovado) {
        console.log(`O Aluno ${student.name} está REPROVADO!`)
    } else {
        console.log(`O Aluno ${student.name} está APROVADO!`)
    }
}

function studentsReprovados(students) {
    //Para cada "student" da lista de students, faça!
    for (let student of students) {
        marcarComoReprovado(student)
        enviarMensagemDeReprovado(student)
    }
}

const media1 = calculateAverage(classA)
const media2 = calculateAverage(classB)

sendMessage(media1, 'TurmaA')
sendMessage(media2, 'TurmaB')

studentsReprovados(classA)
studentsReprovados(classB)
