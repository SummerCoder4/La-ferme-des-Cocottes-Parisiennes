/* Anime la navbar pour qu'au scroll elle se réduise */
window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("menuDesktopSize").style.margin = "0px";
    document.querySelector(".logo").style.width = "55px";
  }
  else {
    document.getElementById("menuDesktopSize").style.margin = "16px";
    document.querySelector(".logo").style.width = "65px";}
}

const btn = document.querySelector('.b1');
const menuDeroule = document.querySelector('.menuDeroulant');

let toggle = 0;

btn.addEventListener('click', e => {
  console.log("poulet", e.target.classList)
        e.target.classList.toggle('active');
        menuDeroule.classList.toggle('deroule');
})


// const darkMode = document.querySelector('.darkMode'); 

// darkMode.addEventListener('click', () => {

//   const body = document.body; 

//   if(body.classList.contains('dark')){
//     body.classList.add('light')
//     body.classList.remove('dark')
//     darkMode.innerHTML = "Nuit"

//   } else if(body.classList.contains('light')){
//     body.classList.add('dark')
//     body.classList.remove('light')
//     darkMode.innerHTML = "Jour"

//   }
// })