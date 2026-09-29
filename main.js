const menuBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navlinks');
if(menuBtn && menu){menuBtn.addEventListener('click',()=>menu.classList.toggle('open'));}
