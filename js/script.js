const toggle = document.getElementById('toggle-down');

toggle.addEventListener('click',()=>{
    toggle.classList.add('d-none')
    toggle2.classList.remove('d-none')
})

const toggle2 = document.getElementById('toggle-up');

toggle2.addEventListener('click',()=>{
    toggle2.classList.add('d-none')
    toggle.classList.remove('d-none')
})