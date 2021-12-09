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