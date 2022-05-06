const T_DER= 39;
const T_IZQ = 37;
const T_UP = 38;
const T_DOWN = 40;
const T_SPACE = 32;

const JUEGO_ANCH = 800;
const JUEGO_ALT = 600;

const VELOCIDAD = 1.2; // Cuato mayor mas velocidad
const CANTDISPARO = 40; //Cunto menos mas disparos
const VELICIDADLASER = 2 //Cuanto mayor mas velocidad

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
    enemigos: [],
    nave_anch : 80,
    enemi_anch : 80,
    num_enemigos: 10
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

function hitboxLaser(lasers, laser, $laser){
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
function createLaser($juego,x,y){
    const $laser = document.createElement("img");
    $laser.src = "assets/laser.png";
    $laser.className = "laser";
    $juego.appendChild($laser);
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
            hitboxLaser(lasers, laser, laser.$laser);
        }
        setPos(laser.$laser, laser.x, (laser.y));
    }
}

//Enemigos

function createEnemi($juego, x, y){
    const $enemi = document.createElement("img");
    $enemi.src = "assets/ufo.png";
    $enemi.className = "enemigo";
    $juego.appendChild($enemi);
    const enemigos = {x,y, $enemi};
    STATE.enemigos.push(enemigos);
    setSize($enemi, STATE.enemi_anch);
    setPos($enemi,x,y);
}

function createEnemigos($juego){
    for(var i = 1; i <= STATE.num_enemigos/2; i++){
        createEnemi($juego, (i-1)*130, 60);
    } 
    for(var i = 1; i <= STATE.num_enemigos/2; i++){
        createEnemi($juego, (i-1)*130, 130);
    }
}

function updateEnemi(){
    const dx = Math.sin(Date.now()/1000)*40;
    const dy = Math.cos(Date.now()/1000)*30;
    const enemigos = STATE.enemigos;
    for (let i = 0; i < enemigos.length; i++){
      const enemi = enemigos[i];
      var a = enemi.x + dx;
      var b = enemi.y + dy;
      setPos(enemi.$enemi, a, b);
    //   enemi.cooldown = Math.random(0,100);
    //   if (enemi.enemi_cooldown == 0){
    //     createenemiLaser($juego, a, b);
    //     enemi.enemi_cooldown = Math.floor(Math.random()*50)+100 ;
    //   }
    //   enemi.enemi_cooldown -= 0.5;
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
    updateLaser($juego);
    updateEnemi();

    window.requestAnimationFrame(update);
}

//Juego
const $juego = document.querySelector(".juego");
createPlayer($juego);
createEnemigos($juego);

//Listeners
window.addEventListener("keydown",KeyPress);
window.addEventListener("keyup",KeyRelease);

update();