//código que asigna la clase lightMode al body para poder ser editado en scss
let cMode = document.querySelector(".cToggle");
cMode.addEventListener("click",()=> {
    let element = document.body;
    element.classList.toggle("lightMode");
 })