const menu = document.querySelector('.menuBtn')
const closeEl = document.querySelector('.close')
const banner = document.querySelector('.banner');
const about = document.querySelector('.about')
const aboutEl = document.querySelector('#about')
const work = document.querySelector('.work')
const workEl = document.querySelector('#work')
const contact = document.querySelector('.contact')
const contactEl = document.querySelector('#contact')

menu.onclick = function(){
  menu.classList.toggle('active')
  closeEl.classList.toggle('active')
  banner.classList.add('active')
}
closeEl.onclick = function(){
  closeEl.classList.toggle('active')
  menu.classList.toggle('active')
  banner.classList.remove('active')
}



function parallax(e){
  this.querySelectorAll('.elements').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX*speed)/100;
    layer.style.transform = `translateX(${x}px)`;
  })
}

document.addEventListener("mousemove", parallax);

about.addEventListener('click',() => {
  aboutEl.classList.toggle('active')
})

work.addEventListener('click', () => {
  workEl.classList.toggle('active')
})

contact.addEventListener('click',() => {
  contactEl.classList.toggle('active')
})



