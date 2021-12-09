const darkMode = document.querySelector('.darkMode') 
const audio = new Audio('img/0440.mp3')

darkMode.addEventListener('click', () => {

  const body = document.body; 

  if(body.classList.contains('dark')){
    body.classList.add('light')
    body.classList.remove('dark')
    darkMode.innerHTML = "Nuit"  
    audio.play()
  
  } else if(body.classList.contains('light')){
    body.classList.add('dark')
    body.classList.remove('light')
    darkMode.innerHTML = "Jour"
 
  }
})
