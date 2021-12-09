const btnCocot = document.querySelector(".btnCocot")
const chatPoules = document.querySelector(".poules__popup-container")
    btnCocot.addEventListener("click",() => {

      chatPoules.style.display = "block";
        
    })

const dataPoule = [
  "Cocote ?", "COCOTE", "Tecoco ?", "Teco cocotte ?", "coco teco ?", "COTECOTTE", "Cocote coco", "Eh merde", "Cocote cocococoTTEE"
];

const echange = document.querySelector(".poules__popup-message");
let randomCot;


document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  	inputField.addEventListener("keydown", function(e) {
    	if (e.code === "Enter") {
          const question = document.createElement("div");
          question.innerHTML = inputField.value;
          inputField.value = "";
        echange.appendChild(question);
				randomCot = dataPoule[Math.floor(Math.random() * dataPoule.length)];
				const answer = document.createElement("div");
				answer.innerHTML = randomCot;
				echange.appendChild(answer);
     };
    });
});