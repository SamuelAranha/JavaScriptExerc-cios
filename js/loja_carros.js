alert("Aqui vamos ver o valor que o funcionário vai resceber ")

var numero_carro_vendidos = parseFloat (prompt("Digite o números de carros que foram vendidos: ")) 
var comissao = parseFloat (prompt ("Digite da comissão: "))
var salario_fixo = parseFloat (prompt("Digite o valor total do sálario do indíviduo"))
var valor_total_vendas = parseFloat (prompt("Digite o valor total das vendas: "))

resultado = salario_fixo+(comissao*numero_carro_vendidos)+(valor_total_vendas*5/100)

alert("O valor a ser recebido pelo funcionário é: " + resultado)
 