const partners = document.querySelectorAll('.partner');

document.querySelector('.next').addEventListener('click', () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    active.nextElementSibling ? active.nextElementSibling.classList.add('active') : partners[0].classList.add('active')
});

// const clients = document.getElementById('clients');
// const cases = document.getElementById('cases');
// const lawyers = document.getElementById('lawyers');

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
        }, 200);
    }
    // let i = 0;
    // do {
    //     setTimeout(() => {
    //         element.textContent = i;
    //     }, 10)
    // }
    // while (i > finalValue);

    // setInterval(() => {
    //     // console.log(intervalFunc)
    //     let i = 0;
    //     i++;
    //     i === finalValue ? '' : element.textContent = i;

    // }, 200);
    // intervalFunc()
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target.querySelector('.numbers')
            const name = element.getAttribute('data-name')
            const value = numbers[name];
            numberIncrement(element, value);
        } else {
            entry.target.querySelector('.numbers').textContent = 0;
        }
    })

}, {
    threshold: 1
});

cards.forEach(card => {
    observer.observe(card);
});