let storage = localStorage.getItem("primero");
let storage2 = localStorage.getItem("segundo");
let storage3 = localStorage.getItem("tercero");
let name1 = localStorage.getItem("n1");
let name2 = localStorage.getItem("n2");
let name3 = localStorage.getItem("n3");
// localStorage.clear();
if (storage == null && storage2 == null && storage3 == null && name1 == null && name2 == null && name3 == null) {
    localStorage.setItem("primero", 0);
    localStorage.setItem("segundo", 0);
    localStorage.setItem("tercero", 0);
    localStorage.setItem("n1", "none");
    localStorage.setItem("n2", "none");
    localStorage.setItem("n3", "none");
    storage = 0;
    storage2 = 0;
    storage3 = 0;
    name1 = "none";
    name2 = "none";
    name3 = "none";
}

document.querySelector(".primero").innerHTML = storage;
document.querySelector(".segundo").innerHTML = storage2;
document.querySelector(".tercero").innerHTML = storage3;
document.querySelector(".n1").innerHTML = name1;
document.querySelector(".n2").innerHTML = name2;
document.querySelector(".n3").innerHTML = name3;

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