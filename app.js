const partners = document.querySelectorAll('.partner');

document.querySelector('.next').addEventListener('click', () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    active.nextElementSibling ? active.nextElementSibling.classList.add('active') : partners[0].classList.add('active')
})