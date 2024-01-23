//Variables
let numeroMaxPosible = parseInt(prompt("Me indicas un numero maximo con el que quieras jugar"))
let numeroMinPosible = parseInt(prompt("Me indicas un numero minimo con el que quieras jugar"))

let numeroSecreto = Math.floor(Math.random()*numeroMaxPosible) + numeroMinPosible;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;


while(numeroUsuario != numeroSecreto){
     numeroUsuario = parseInt(prompt(`Me indicas un numero entre ${numeroMaxPosible} y ${numeroMinPosible} , por favor:`))
    
    console.log(numeroUsuario)
/*Condicionales y comparacion*/
    if(numeroUsuario == numeroSecreto){
        alert(`Acertaste el numero ${numeroSecreto}. lo hiciste en ${intentos} ${intentos == 1? 'vez': 'veces'}`)
    }else{
        if(numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor")
        }else{
            alert("El numero secreto es mayor")
        }
        intentos++;
        if(intentos>maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos el numero secreto era ${numeroSecreto}`)
            break;
        }
    }
}


