alert ("Descubra aqui a previsão das eleições ")

var votosTotal = parseInt (prompt("Digite o total de eleitores: ")) 
var votos_em_branco = parseInt (prompt("Digite o total votos  de Brancos: ")) 
var votosNulo = parseInt (prompt("Digite o total de Nulos: ")) 

porcentagem_votos_embranco = votosTotal*(votos_em_branco/100)
porcentagem_votosnulos = votosTotal*(votosNulo/100)

alert("Eleitores no total: "+votosTotal)
alert(`A porcentagem de votos em branco é: ${porcentagem_votos_embranco} `)
alert(`A porcentagem de votos em nulos é: ${porcentagem_votosnulos} `)


