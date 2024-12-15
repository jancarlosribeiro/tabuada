const numero = document.querySelector("#numeroUsuario")
const btnTabuada = document.querySelector("#btnTabuada")
const resultado = document.querySelector("#res")

function calculo() {
resultado.innerHTML = '' /* Limpeza de código */ 
var conversao = Number(numero.value)

var inicial = 1
while(inicial <= 100) {
    resultado.innerHTML += `<p> ${conversao} x${inicial} = ${conversao * inicial}  </p>`

    inicial++
}

}

btnTabuada.addEventListener("click", calculo)
/* OPÇÃO 1 DE LOOP
for(var inicial = 0; inicial < 10; inicial++) {
    alert(inicial)
} */

/*  OPÇÃO 2 DE LOOP
var inicial = 0
while (inicial <= 10) {
    alert(inicial)
    inicial ++
} */

/* OPÇÃO 3 DE LOOP 
var inicial = 0    
do {
    alert(inicial)

    inicial ++
} while (inicial <= 10); */

 



/* 
*LOOP* = 
dividido em três partes
"1- para(var inicial  = 1,2,3)"
"2- para(var inicial  = 0, inicial < 10, inicial ++ {
0
1
2
3
4
5
6
7
8
9
....
}")
3- para(var inicial  = inicial; teste; incremento)
*/