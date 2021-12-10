const darkMode = document.querySelector('.darkMode'); //stock bouton changing mode 
const audio = new Audio('img/0440.mp3'); //stock musique light
const body = document.body; //stock le body

darkMode.addEventListener('click', () => {

  if(body.classList.contains('dark')){ //mode light actif
    body.classList.add('light')
    body.classList.remove('dark')
    darkMode.innerHTML = "Nuit"  
    audio.play()
  
  } else if(body.classList.contains('light')){ //mode dark actif
    body.classList.add('dark')
    body.classList.remove('light')
    darkMode.innerHTML = "Jour"
  }
  
  if(body.className === "dark"){
    console.log('Nuit');
    localStorage.setItem('darkMode', 'enabled')
  } else {
    console.log('Jour')
    localStorage.setItem('darkMode', 'disabled')
  }
})

if(localStorage.getItem('darkMode') == 'enabled') {
  console.log('On rentre bien dans la condition')
  body.classList.add('dark');
  body.classList.remove('light');
  darkMode.innerHTML = "Jour";
}

