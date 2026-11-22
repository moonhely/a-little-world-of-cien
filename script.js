const buttons=document.querySelectorAll('[data-page]');
const pages=document.querySelectorAll('.page');
function showPage(id){pages.forEach(p=>p.classList.toggle('active',p.id===id));buttons.forEach(b=>b.classList.toggle('active',b.dataset.page===id));window.scrollTo({top:0,behavior:'smooth'});}
buttons.forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.go)));
document.getElementById('guest-form').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('guest-name').value.trim();const message=document.getElementById('guest-message').value.trim();if(!name||!message)return;const card=document.createElement('article');const who=document.createElement('strong');who.textContent=name+' left a note';const words=document.createElement('p');words.textContent=message;card.append(who,words);document.getElementById('entries').prepend(card);e.target.reset();});
