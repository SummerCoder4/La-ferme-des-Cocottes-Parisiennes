const lePopUp = document.querySelector(".poules__popup-container")

function lesPoules() {
  lePopUp.style.display = "block";
}

function fermerLesPoules() {
  lePopUp.style.display = "none";
}


const dataPoule = [
  "Cocote ?", "COCOTE", "Tecoco ?", "Teco cocotte ?", "coco teco ?", "COTECOTTE", "Cocote coco", "Eh merde", "Cocote cocococoTTEE",
  "Cococotte", "tetetetecoco", "Kikeriki", "Cock-a-doodle-do", "Kokokog et Kekele", "Kokekoko "
];

const echange = document.querySelector(".poules__popup-message");
let randomCot;


document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  	inputField.addEventListener("keydown", function(e) {
    	if (e.code === "Enter") {
          const question = document.createElement("p");
          question.innerHTML = inputField.value;
          inputField.value = "";
        echange.appendChild(question);
				randomCot = dataPoule[Math.floor(Math.random() * dataPoule.length)];
				const answer = document.createElement("p");
				answer.innerHTML = randomCot;
				echange.appendChild(answer);
     };
    });
});