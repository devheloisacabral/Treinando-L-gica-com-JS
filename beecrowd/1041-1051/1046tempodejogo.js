// Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o 
// mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

// Entrada
// A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

// Saída
// Apresente a duração do jogo conforme exemplo abaixo.

const prompt = require('prompt-sync')
const prompt2 = prompt()

const numero1 = parseInt(prompt2('Digite a hora de inicio '))
const numero2 = parseInt(prompt2('Digite a hora que acabou o jogo '))

const duracao = numero2 - numero1
if( duracao > 1 && duracao < 24){
    console.log(`A duração do jogo foi de ${duracao} horas`)
} else{
    console.log('Valor inválido')
}
