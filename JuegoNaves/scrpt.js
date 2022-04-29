const T_DER= 39;
const T_IZQ = 37;
const T_UP = 38;
const T_DOWN = 40;
const T_SPACE = 32;

const JUEGO_ANCH = 800;
const JUEGO_ALT = 600;

const VELOCIDAD = 5; // Cuato mayor mas veicidad
const CANTDISPARO = 15; //Cunto menos mas disparos
const VELICIDADLASER = 5.3

const STATE = {
    x_pos : 0,
    y_pos : 0,
    move_der : false,
    move_izq : false,
    move_up : false,
    move_down : false,
    disparar : false,
    laserCooldown : 0,
    lasers: [],
    nave_anch : 80
}

//Funciones generales

function setPos($elemento,x,y){
    $elemento.style.transform = `translate(${x}px,${y}px)`;

}

function setSize($elemento,anch){
    $elemento.style.width = `${anch}px`;
    $elemento.style.height = 'auto';
}

function hitboxX(x){
    if(x >= JUEGO_ANCH-STATE.nave_anch){
        STATE.x_pos = JUEGO_ANCH-STATE.nave_anch;
        return STATE.x_pos;
    }
    if(x<=0){
        STATE.x_pos = 0;
        return STATE.x_pos;
    }else {
        return x;
    }
}

function hitboxY(y){
   if(y>=550){
       STATE.y_pos = 550;
       return STATE.y_pos;
   }
    if(y<=0){
        STATE.y_pos = 0;
        return STATE.y_pos;
    }else {
        return y;
    }

}

function deleteLaser(lasers, laser, $laser){
    const index = lasers.indexOf(laser);
    lasers.splice(index, 1);
    $juego.removeChild($laser);
}

//Jugador
function createPlayer($juego){
    STATE.x_pos = JUEGO_ANCH/2.1;
    STATE.y_pos= JUEGO_ALT-140;
    const $jugador = document.createElement("img");
    $jugador.src = "assets/ship6_0.png";
    $jugador.className = "jugador";
    $juego.appendChild($jugador);
    setSize($jugador, STATE.nave_anch);
    setPos($jugador, STATE.x_pos,STATE.y_pos);
}

function updatePlayer(){
    if(STATE.move_izq){
        STATE.x_pos -= VELOCIDAD;
    }
    if(STATE.move_der){
        STATE.x_pos +=VELOCIDAD;
    } 
    if(STATE.move_up){
        STATE.y_pos -=VELOCIDAD;
    } 
    if(STATE.move_down){
        STATE.y_pos +=VELOCIDAD;
    }
    
    if(STATE.disparar && STATE.laserCooldown == 0){
        createLaser($juego,STATE.x_pos - STATE.nave_anch/2,STATE.y_pos);
        STATE.laserCooldown = CANTDISPARO;
    } 
    const $jugador = document.querySelector(".jugador");
    setPos($jugador, hitboxX(STATE.x_pos), hitboxY(STATE.y_pos));
    if(STATE.laserCooldown > 0){
        STATE.laserCooldown -= 0.5;
    }
    console.log(STATE.laserCooldown);
}

//Laser jugador
function createLaser($elemento,x,y){
    const $laser = document.createElement("img");
    $laser.src = "assets/laser.png";
    $laser.className = "laser";
    $elemento.appendChild($laser);
    const laser = {x,y,$laser};
    STATE.lasers.push(laser);
    setPos($laser, x,y);
}

function updateLaser(){
    const lasers = STATE.lasers;
    for (let i = 0; i < lasers.length; i++) {
        const laser = lasers[i];
        laser.y -=VELICIDADLASER;
        if(laser.y < -2){
            deleteLaser(lasers, laser, laser.$laser);
        }
        setPos(laser.$laser, laser.x, (laser.y));
    }
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
    } else if(event.keyCode === T_SPACE){
        STATE.disparar = true;
        console.log("Tecla space presionada");
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
    }else if(event.keyCode === T_SPACE){
        STATE.disparar = false;
    }
}

//Update juego
function update(){
    updatePlayer();
    updateLaser($juego)
    window.requestAnimationFrame(update);
}


//Juego
const $juego = document.querySelector(".juego");
createPlayer($juego);


//Listeners
window.addEventListener("keydown",KeyPress);
window.addEventListener("keyup",KeyRelease);


update();