const partners = document.querySelectorAll('.partner');

document.querySelector('.next').addEventListener('click', () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    active.nextElementSibling ? active.nextElementSibling.classList.add('active') : partners[0].classList.add('active')
});
document.querySelector('.previous').addEventListener('click', () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    active.previousElementSibling ? active.previousElementSibling.classList.add('active') : partners[1].classList.add('active')
});

const cards = document.querySelectorAll('.rate-card article');
const numbers = {
    clients: 2000,
    cases: 500,
    lawyers: 50,
    awards: 20,
}
const numberIncrement = (element, finalValue) => {
    for (let i = 0; i <= finalValue; i++) {
        setTimeout(() => {
            element.textContent = i;
        }, 100);
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target.querySelector('.numbers')
            const name = element.getAttribute('data-name')
            const value = numbers[name];
            numberIncrement(element, value);
        } else {
            entry.target.querySelector('.numbers').textContent = 1;
        }
    })

}, {
    threshold: 0.3
});

cards.forEach(card => {
    observer.observe(card);
});