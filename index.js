//Atividade 1
var _numero = 100; // Aconselhável não inicar com _ . Uma variavel no JS deve sempre começar com uma letra, seja ela maiuscula/minuscula
if(_numero >= 0 ){
    console.log("Número positivo")
}else{
    console.log("Número negativo")
}

//Atividade 2
function calc(a, b, c){
    if(a + c == b ){
        console.log(`${a} + ${b} = ${a + b}`)
    }else{
        console.log(`${a} + ${b} = ${c}`)
    }
}

//Atividade 3
function horarios(tipo){
    if(tipo == "matutino"){
        console.log("Bom dia")
    }else if(tipo == "noturno"){
        console.log("Boa noite")
    }else{
        console.log("Valor invalido")
    }
}