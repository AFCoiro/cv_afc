//Array de las direcciones de imagenes para poder mostrarlas mediante fnKnow, que se ejecuta cuando se selecciona el li "conocimientos"

const arrayImg = [
    "./img/skills/React.png",
    "./img/skills/html5.png",
    "./img/skills/javascript.png",
    "./img/skills/css3.png",
    "./img/skills/Sass.png",
    "./img/skills/git.png",
    "./img/skills/JSON.png",
    "./img/skills/Bootstrap.png",
    "./img/skills/material_design.png",
    "./img/skills/Firebase.png",
    "./img/skills/FileZilla.png"
  ];

function fnKnow() {
  const divCont1 = document.createElement('div');
  divCont1.setAttribute('class','contImg1');

  arrayImg.forEach( mImg =>{
    const divSubcnt = document.createElement('div');
    divSubcnt.setAttribute('class','divSubcnt1');
    divSubcnt.innerHTML += `<img src="${mImg}" alt="${mImg}" class="imgKno">`;
    divCont1.append(divSubcnt);
    }
  )
  mainEmpty.append(divCont1);
}


