const open = document.getElementById('open')
const close =document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click',()=> container.classList.add ('show-nav'))
close.addEventListener('click',() => container.classList.remove('show-nav'))


//------Clean Version------//

/*const container = document.querySelector('.container');

document.getElementById('open').onclick = () =>
  container.classList.add('show-nav');

document.getElementById('close').onclick = () =>
  container.classList.remove('show-nav');*/
