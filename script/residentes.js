const lePopUp = document.querySelector(".poules__popup-container")

let Nicole ="Nicole"
let Eleonor ="Eleonor"
let Sabrina ="Sabrina"
let Christelle ="Christelle"
let Mystic ="Mystic"
let Edith ="Edith"
let Georges ="Georges"


function lesPoules(a) {
  console.log("fun" + a)
  lePopUp.style.display = "block";
  nomDeLaPouleQuiParle = a
  return nomDeLaPouleQuiParle;
}

function fermerLesPoules() {
  lePopUp.style.display = "none";
  console.log(nomDeLaPouleQuiParle)

}

function resetChat() {
 
  const removeElements = (elms) => elms.forEach(el => el.remove());

  removeElements( document.querySelectorAll(".classAsupprimer") );

}


const dataPoule = [
  "Cocote ?", "COCOTE", "Tecoco ?", "Teco cocotte ?", "coco teco ?", "COTECOTTE", "Cocote coco", "Eh merde", "Cocote cocococoTTEE",
  "Cococotte", "tetetetecoco", "Kikeriki", "Cock-a-doodle-do", "Kokokog", "Kokekoko "
];

const echange = document.querySelector(".poules__popup-message");
let randomCot;

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  	inputField.addEventListener("keydown", function(e) {
    	if (e.code === "Enter" && inputField.value !== "") {
        const question = document.createElement("p");
        question.innerHTML = "Vous : <br>" + inputField.value;
        question.classList.add("classAsupprimer");
         inputField.value = "";
        echange.appendChild(question);
				randomCot = dataPoule[Math.floor(Math.random() * dataPoule.length)];
				const answer = document.createElement("p");
        console.log(nomDeLaPouleQuiParle.value)
				answer.innerHTML = `${lesPoules(nomDeLaPouleQuiParle)}: <br>${randomCot}`;
        answer.classList.add("classAsupprimer");
				echange.appendChild(answer);
     };
    });
});