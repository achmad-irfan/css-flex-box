const toggle = document.getElementsByClassName("menu-toggle")[0],
  navg = document.querySelector(".nav");

  toggle.addEventListener('click',function(){
    navg.classList.toggle('slide')
  })