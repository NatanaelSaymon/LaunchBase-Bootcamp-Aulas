//Criar um programa que calcula a media das notas entre alunos e envia msg do calculo da media.
//Se a nota for maior que 5 parabenizar a turma

const nome1 = 'Natan'
const nome2 = 'Suellen'
const nome3 = 'Cacau'
const nome4 = `Natan e ${nome1}` //template string

const notaAluno1 = 6
const notaAluno2 = 9.9
const notaAluno3 = 2.5

const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3

if(media >= 5){
    console.log(`Parabens!! A media de nota dos aulos é maior que 5. Resultado: ${media}`)
}else{
    console.log(`A media de nota dos aulos está muito baixa`)
}



