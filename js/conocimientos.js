//Array de las direcciones de imagenes para poder mostrarlas mediante fnKnow, que se ejecuta cuando se selecciona el li "conocimientos"

const arrayImg = [
    "React",
    "html5",
    "javascript",
    "css3",
    "Sass",
    "git",
    "JSON",
    "Bootstrap",
    "material_design",
    "Firebase",
    "FileZilla",
    "visual_studio"
  ];

function fnKnow() {
  const divCont1 = document.createElement('div');
  divCont1.setAttribute('class','contImg1');

  arrayImg.forEach( mImg =>{
    const divSubcnt = document.createElement('div');
    divSubcnt.setAttribute('class','divSubcnt1');
    divSubcnt.innerHTML += `<div class="contImgS"><img src="./img/skills/${mImg}.png" alt="${mImg}" class="imgKno">
                            <h5 class="nameSkill">${mImg}</h5></div>`;
    divCont1.append(divSubcnt);
    }
  ) 
  mainEmpty.append(divCont1);
}


