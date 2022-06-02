/* ======================== SCROLL REVEAL ANIMATION ======================== */   
const sr = ScrollReveal({
    origin: 'top',
    distance: '150px',
    duration: 2000,
    delay: 400
})

sr.reveal('.home__img, .partners__img', {interval: 400})
sr.reveal('.about-us__img, .footer--left', {origin: 'left'})
sr.reveal('.about-us__content, .footer--right', {origin: 'right'})
sr.reveal('.features__card', {interval: 250})
