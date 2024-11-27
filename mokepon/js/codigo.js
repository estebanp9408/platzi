const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const BotonMascotajugador = document.getElementById("boton-mascota")
const botonReinciar = document.getElementById('boton-reiniciar')

const botonAgua = document.getElementById('boton-agua')
const botonFuego = document.getElementById('boton-fuego')
 const botonTierra = document.getElementById('boton-tierra')
const botonAire = document.getElementById('boton-aire')

const sectionSeleccionarmascota = document.getElementById('seleccionar-mascota')
const inputHipodoge= document.getElementById("hipodoge")
const inputCapipepo = document.getElementById("capipepo")
const inputRatigueya= document.getElementById("ratigueya")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaContrincante = document.getElementById("mascota-contrincante")

const spanVIdascontrincante = document.getElementById('Vidas-contrincante')
const spanVidasJugador = document.getElementById('vidas-jugador')

const sectionMensajes = document.getElementById('resultado')
const ataquesJugador = document.getElementById('ataques-jugador')
const ataquesEnemigo = document.getElementById('ataques-enemigo')

let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 4
let vidasContrincante = 4

class mokepon{
    constructor(nombre,vida,foto) {
        this.nombre = nombre
        this,foto = foto
        this.vida = vida
    }
}
let hipodoge =new mokepon('Hipodoge',5,'./assets/mokepons_mokepon_hipodoge_attack.png',)

function inciarJuego(){  
        sectionSeleccionarAtaque.style.display='none'
        BotonMascotajugador.addEventListener("click", seleccionarMascotajugador)
        botonReinciar.addEventListener('click', reinciarJuego)
        botonReinciar.style.display='none'
        botonAgua.addEventListener('click', ataqueAgua)
        botonFuego.addEventListener("click", ataqueFuego) 
        botonTierra.addEventListener("click", ataqueTierra)
        botonAire.style.display='none'
}
 
function seleccionarMascotajugador(){
    sectionSeleccionarmascota.style.display='none'
    sectionSeleccionarAtaque.style.display='flex'
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "hipodoge"
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "capipepo"
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "ratigueya"
    }else {
        alert("selecciona mascota")
    }
    seleccionarMascotaContrincante () 
}
function seleccionarMascotaContrincante (){
        let mascotaAleatorio = aleatorio(1,3)
        if (mascotaAleatorio  == 1 ){
                spanMascotaContrincante.innerHTML ="hipodoge"
            }else if (mascotaAleatorio == 2) {
                spanMascotaContrincante.innerHTML ="capipepo"
            }else if (mascotaAleatorio == 3){
                spanMascotaContrincante.innerHTML ="ratigueya"
            }
    }
    function ataqueAgua (){
        ataqueJugador = "AGUA"
        ataqueAleatorioEnemigo()
    }
    function ataqueFuego (){
        ataqueJugador = "FUEGO"
        ataqueAleatorioEnemigo()
    }
    function ataqueTierra (){
        ataqueJugador = "TIERRA"
        ataqueAleatorioEnemigo()
    }
    function ataqueAleatorioEnemigo(){
        let ataqueAleatorio=aleatorio(1,3)
        if(ataqueAleatorio == 1){
            ataqueEnemigo = 'FUEGO'

        }else if(ataqueAleatorio == 2){
            ataqueEnemigo = 'AGUA'
        }else {
            ataqueEnemigo = 'TIERRA'
        }
        combate()
    }
    function combate(){ 
        sectionSeleccionarAtaque.style.display='flex'
        if(ataqueJugador == ataqueEnemigo){
            crearMensaje("EMPATE ")
        } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' ){
            crearMensaje("GANASTE") 
            vidasContrincante--
            spanVIdascontrincante.innerHTML= vidasContrincante
        } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
            crearMensaje("GANASTE")
            vidasContrincante--
            spanVIdascontrincante.innerHTML= vidasContrincante
        } else if (ataqueJugador == 'tierra' && ataqueEnemigo == 'AGUA'){
            crearMensaje("GANASTE")
            vidasContrincante--
            spanVIdascontrincante.innerHTML= vidasContrincante
        } else {
            crearMensaje("PERDISTE ")
            vidasJugador--
            spanVidasJugador.innerHTML=vidasJugador
        }
        revisarVidas()
    }
    function revisarVidas(){
        if (vidasContrincante == 0){
            crearMensajeFinal("FELICIDADES GANASTEEEE")
        }else if(vidasJugador == 0){
            crearMensajeFinal("LO SIENTO CONTRICANTE GANA ")
        }
    }
    function crearMensaje(resultado){
        sectionMensajes.innerHTML = resultado
        ataquesJugador.innerHTML = ataqueJugador
        ataquesEnemigo.innerHTML = ataqueEnemigo
    }   
    function crearMensajeFinal(resultadoFinal){
        sectionMensajes.innerHTML = resultadoFinal
        botonReinciar.style.display='block'
        botonAgua.style.display='none'
        botonFuego.style.display='none'
        botonTierra.style.display='none'
    }   
    function reinciarJuego(){
        location.reload()
    }
    function aleatorio (min , max){
        return  Math.floor(Math.random() * (max - min+ 1) + min) 
        }
   
 window.addEventListener('load', inciarJuego)
