// O objetivo é calcular o valor de uma prestação incluindo taxa pelo atraso, e exibir o valor final 


var valor = parseFloat(prompt ("Digite o valor da prestação: ")) 
var taxa = parseFloat(prompt("Digite o valor da taxa de juros pelo atraso: "))
var tempo = parseFloat(prompt("Digite o tempo de atraso da prestação: "))

prestacao = valor+((valor*taxa/100)*tempo)

alert ("O valor atual da prestação é: "+prestacao)

