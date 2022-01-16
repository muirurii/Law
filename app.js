//Slider
const partners = document.querySelectorAll('.partner');

const nextPartner = () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    active.nextElementSibling ? active.nextElementSibling.classList.add('active') : partners[0].classList.add('active');
}
document.querySelector('.next').addEventListener('click', nextPartner);

document.querySelector('.previous').addEventListener('click', () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    active.previousElementSibling ? active.previousElementSibling.classList.add('active') : partners[1].classList.add('active')
});

setInterval(nextPartner, 60000);

//Rate card number effect

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
        }, 50);
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target.querySelector('.numbers');
            const name = element.getAttribute('data-name');
            const finalValue = numbers[name];
            numberIncrement(element, finalValue);
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

//To top
document.querySelector('.to-top').addEventListener('click', () => {
    window.scrollTo(0, 0);
});

//hamburger
const smallMenu = document.querySelector('.small-nav');
document.querySelector('.hamburger').addEventListener('click', (e) => {
    if (!e.target.classList.contains('closed')) {
        smallMenu.classList.add('show');
        e.target.classList.add('closed');
    } else {
        smallMenu.classList.remove('show');
        e.target.classList.remove('closed');
    }
})