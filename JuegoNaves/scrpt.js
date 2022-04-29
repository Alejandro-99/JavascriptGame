const T_DER= 39;
const T_IZQ = 37;
const T_UP = 38;
const T_DOWN = 40;
const JUEGO_ANCH = 800;
const JUEGO_ALT = 600;

const STATE = {
    x_pos : 0,
    y_pos : 0,
    move_der : false,
    move_izq : false,
    move_up : false,
    move_down : false,
    nave_anch : 80
}

function setPos($elemento,x,y){
    $elemento.style.transform = `translate(${x}px,${y}px)`;

}

function setSize($elemento,anch){
    $elemento.style.width = `${anch}px`;
    $elemento.style.height = 'auto';
}


//Jugador
function createPlayer($juego){
    STATE.x_pos = JUEGO_ANCH/2.1;
    STATE.y_pos= JUEGO_ALT-65;
    const $jugador = document.createElement("img");
    $jugador.src = "assets/ship6_0.png";
    $jugador.className = "jugador";
    $juego.appendChild($jugador);
    setSize($jugador, STATE.nave_anch);
    setPos($jugador, STATE.x_pos,STATE.y_pos);
}

function updatePlayer(){
    if(STATE.move_izq){
        STATE.x_pos -= 3;
    }
    if(STATE.move_der){
        STATE.x_pos +=3;
    } 
    if(STATE.move_up){
        STATE.y_pos -=3;
    } 
    if(STATE.move_down){
        STATE.y_pos +=3;
    } 
    const $jugador = document.querySelector(".jugador");
    setPos($jugador, STATE.x_pos,STATE.y_pos);
}

//Teclas jugador
function KeyPress(event){
    if (event.keyCode === T_DER) {
        STATE.move_der = true;
        console.log("Tecla derecha presionada");
    } else if(event.keyCode === T_IZQ){
        STATE.move_izq = true;
        console.log("Tecla izquierda presionada");
    } else if(event.keyCode === T_UP){
        STATE.move_up = true;
        console.log("Tecla arriba presionada");
    } else if(event.keyCode === T_DOWN){
        STATE.move_down = true;
        console.log("Tecla abajo presionada");
    }
}

function KeyRelease(event){
    if (event.keyCode === T_DER) {
        STATE.move_der = false;
    } else if(event.keyCode === T_IZQ){
        STATE.move_izq = false;
    } else if(event.keyCode === T_UP){
        STATE.move_up = false;
    }  else if(event.keyCode === T_DOWN){
        STATE.move_down = false;
    }
}

//Juego
const $juego = document.querySelector(".juego");
createPlayer($juego);

//Update juego
function update(){
    updatePlayer();
    window.requestAnimationFrame(update);
}


//Listeners
window.addEventListener("keydown",KeyPress);
window.addEventListener("keyup",KeyRelease);


update();