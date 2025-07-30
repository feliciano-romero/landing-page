const menu = document.querySelector('#menu-icon')
const navList = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}

const SR = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
})

SR.reveal('.hero-text', { 
    delay: 200, 
    origin: 'top' 
})

SR.reveal('.hero-image', { 
    delay: 200, 
    origin: 'top' 
})

if (window.matchMedia("(min-width: 769px)").matches) {
    SR.reveal('.icons', {
        delay: 250,
        origin: 'left'
    });

    SR.reveal('.navlist', {
        delay: 500,
        origin: 'right'
    });
}
