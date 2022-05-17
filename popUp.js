let storage = localStorage.getItem("primero");
let storage2 = localStorage.getItem("segundo");
let storage3 = localStorage.getItem("tercero");
if (storage == null && storage2 == null && storage3 == null) {
    localStorage.setItem("primero", 0);
    localStorage.setItem("segundo", 0);
    localStorage.setItem("tercero", 0);
    storage = 0;
    storage2 = 0;
    storage3 = 0;
}

document.querySelector(".primero").innerHTML = storage;
document.querySelector(".segundo").innerHTML = storage2;
document.querySelector(".tercero").innerHTML = storage3;

const open = document.getElementById("open");
const open2 = document.getElementById("score");

const modal_container = document.getElementById("modal_container");
const modal_container2 = document.getElementById("modal_container2");
const close = document.getElementById("close");
const close2 = document.getElementById("close2");

open.addEventListener("click", () => {
    modal_container.classList.add("show");
    sfx.open.play();
});
open2.addEventListener("click", () => {
    modal_container2.classList.add("show");
    sfx.open.play();
});
close.addEventListener("click", () => {
    modal_container.classList.remove("show");
    sfx.open.play();
});
close2.addEventListener("click", () => {
    modal_container2.classList.remove("show");
    sfx.open.play();
});