const button=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));links.classList.toggle('open',!open)});
links?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{links.classList.remove('open');button?.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
