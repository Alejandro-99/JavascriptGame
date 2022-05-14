let storage = localStorage.getItem("puntuacion");
if (storage == null) {
    localStorage.setItem("puntuacion", 0);
    storage = 0;
}

const open = document.getElementById("open");
const open2 = document.getElementById("score");

const modal_container = document.getElementById("modal_container");
const modal_container2 = document.getElementById("modal_container2");
const close = document.getElementById("close");

open.addEventListener("click", () => {
    modal_container.classList.add("show");
});
open2.addEventListener("click", () => {
    modal_container2.classList.add("show");
});
close.addEventListener("click", () => {
    modal_container.classList.remove("show");
});