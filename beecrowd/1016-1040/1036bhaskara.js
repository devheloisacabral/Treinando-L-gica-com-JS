// Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. 
// Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, 
// caso haja uma divisão por 0 ou raiz de numero negativo.

// Entrada
// Leia três valores de ponto flutuante (double) A, B e C.

// Saída
// Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". 
// Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente 
// conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

function bhaskara(a,b,c){
    const delta = b * b - 4 * (a * c)
    const raizDelta = Math.sqrt(delta) 
    
    if (raizDelta <= 0){
       
        console.log('Impossível de calcular')
        
    } if(a == 0){console.log('Não é possivel calcular')}
     else{
       
        const raizPositiva = (-b + (raizDelta))/ (2 * a)
        const raizNegativa = (-b - (raizDelta)) / (2 * a)

        console.log('As raizes são { ' + raizPositiva.toFixed(5) + ', ' + raizNegativa.toFixed(5) + ' }')

    }
}

bhaskara(10,20,5)