//OPERADORES RELACIONAIS E COMPARATIVOS

/*====================================

OPERADORES DE COMPRAÇÃO

    > Maior
    < Menor
    >= Maior igual a
    <= Menor igual a
    == Igual a
    === Igual e do mesmo tipo
    != Diferente de 
    !== Diferente, inclusive do tipo

====================================*/

/**
 * Desafio 1
 * 
 * verificar se a pessoa é maior de 18 anos
 * se sim, deixar entrar, se não, bloquear a entrada
 * 
 * Se a pessoa tiver 17 anos avisar para voltar quando fizer 18 anos
 */

 const idade = 14

 if(idade >= 18){
     console.log(`Você tem ${idade}. Entrada Permitida!`)
 }else if(idade == 17){
    console.log(`Você tem ${idade}. Volte quando completar 18 anos!`)
 }else{
     console.log('Entrada bloqueada!')
 }
 