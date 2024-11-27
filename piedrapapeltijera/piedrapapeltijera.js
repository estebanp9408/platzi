function aleatorio (min , max){
    return  Math.floor(Math.random() * (max - min+ 1) + min) 
    }
function eleccion (jugada){
    let= resultado =" "
    if(jugada == 1){
        resultado="piedra"
 }else if (jugada == 2){
    resultado = "papel" 
 }else if(jugada == 3){
    resultado="tijera"
 }else {
    resultado ="perdedor"}
    
    return resultado 

    
}

// 1 es igual a piedra, 2 es igual a papel y 3 es igual a tijera 
let jugador = 0
let triunfos = 0
let perdidas = 0
let pc = 0
while(triunfos <3 && perdidas <3){
jugador = prompt ("escoge: 1 piedra, 2 papel o 3 tijera") 
pc = aleatorio(1,3)
alert("jugador escoge " +eleccion(jugador) )
alert(" pc elige " + eleccion(pc))
    //combate
    if(pc == jugador){
        alert("empate")
    }else if(jugador == 1 && pc == 3 ){
        alert("ganaste") 
        triunfos = triunfos + 1 
    }else if(jugador == 2 && pc == 1){
        alert("ganaste")
        triunfos = triunfos + 1    
    }else if (jugador == 3 && pc == 2){
        alert("ganaste")
        triunfos = triunfos + 1 
    }
    else{
        alert("perdiste ")
        perdidas = perdidas + 1
    }
    alert("ganaste " + triunfos + "veces. perdiste " + perdidas + " veces")
}

