// TOGGLE MENU BY ICONS
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// CLOSE MENU BY LINKS
const links = document.querySelectorAll('a.title')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// the header casts a shadow during the scrolling
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function headerCastShadow() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// Testimonials: Carousel (Swiper)
const swiper = new Swiper('.swiper', {
  sliderPerView: 1,

  pagination: {
    el: '.swiper-pagination'
  },

  keyboard: true,

  // like media queries
  breakpoints: {
    767: { slidesPerView: 2, setWrapperSize: true }
  }
})

// ScrollReveal
ScrollReveal({ reset: true })

ScrollReveal().reveal(
  `
  #home .image, #home .text, 
  
  #about .image, #about .text .title, #about .text p, 
  
  #services header .title, #services header p, #services .cards .card, 
  
  #testimonials header, #testimonials .testimonials, #testimonials .swiper-pagination, 
  
  #contact .text .title, #contact .text p, #contact .text a, #contact .links li
  `,
  {
    duration: 700,
    interval: 100,
    // easing: 'cubic-bezier(0.37, 0.07, 0.48, 1.1)',
    // interval: 600,
    distance: '1.875rem',
    origin: 'top',
    scale: 0.95
  }
)

ScrollReveal().reveal(
  '#services .cards .card i, #services .cards .card .title, #services .cards .card p, footer, footer .brand .logo-alt, footer .brand p, footer .social a',
  {
    duration: 700,
    interval: 100,
    distance: '1rem',
    origin: 'top',
    scale: 0.95
  }
)

// the back-to-top button appears on the screen
const backToTopButton = document.querySelector('.back-to-top')
const home = document.querySelector('#home')
const homeHeight = home.offsetHeight
function backToTop() {
  if (window.scrollY >= homeHeight) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
// Highlight the visible section on the menu
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.scrollY + (window.innerHeight / 9) * 4

  for (section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const startLimit = checkpoint >= sectionTop
    const endLimit = checkpoint <= sectionTop + sectionHeight

    if (startLimit && endLimit) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// When Scrolling
window.addEventListener('scroll', function () {
  headerCastShadow()
  backToTop()
  activateMenuAtCurrentSection()
})
