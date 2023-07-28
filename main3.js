console.warn('Ejercicio C')

var cantidadDeGatos=10;
var cantidadDePasos=4;


for(var contador=1; contador<=cantidadDeGatos; contador++){
    var resultado ='' + (contador%2 == 0? '⬛': '')
    console.log('Gato #'+ contador+ ': 🐈' + resultado + '🐾'.repeat(cantidadDePasos))
}
