let esconder = document.querySelectorAll('.esconder');
let startPage = document.querySelector('.startPage');

let myCv = document.querySelector('.myCv');
let myLi = document.querySelectorAll(".myLi");

let mainEmpty = document.querySelector(".mainEmpty");
let rellenoData = document.querySelector(".rellenoData");

let main1 ;
let main2 ;
let main3 ;

let myLang = document.querySelectorAll(".myLang");

//forEach con Escuchador para identificar, dependiendo que idioma se elija, que contenido ingresar en el main
myLang.forEach( Lang => {Lang.addEventListener('click',()=>{

        esconder.forEach(e =>{e.style.opacity="1";});
        startPage.style.display = "none";
        if(Lang == myLang[0]){
            main1 = text1Esp;
            main2 = text2Esp;
            main3 = text3Esp;
        }else if(Lang == myLang[1]){
            main1 = text1Ing;
            main2 = text2Ing;
            main3 = text3Ing;

            myLi[0].innerText="About Me";
            myLi[1].innerText="Knowledge";
            myLi[2].innerText="Contact";
            myCv.innerText="Download Resume";
        }
        mainEmpty.innerHTML= main1;
        }
    )

    }
)



//for of con escuchador para asignar el contenido del main correspondiente a cada Li
for ( const myL of myLi){
    myL.addEventListener('click',()=>{
        switch (myL) {
            case myLi[0]:
                mainEmpty.innerHTML= main1;
                break;
            case myLi[1]:
                mainEmpty.innerHTML = main2;
                fnKnow();
                break;
            default:
                mainEmpty.innerHTML = main3;
                break;
        }
    })
}

//for con escuchador para asignar la clase activa en el Li seleccionado
for (let i = 0; i < myLi.length; i++) {
    myLi[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("activeLi");
      current[0].className = current[0].className.replace(" activeLi", "");
      this.className += " activeLi";
    });
  }
  