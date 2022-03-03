// ScrollReveal currently overwrites css animations set by me. When it updates into not doing that crap, add '.card' into the scrollReveal animation

// TOGGLE MENU BY CLICKING ON ICONS
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// CLOSE MENU BY CLICKING ON LINKS
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
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  // !!!!!!!! You can't apply any transform rules to those you select on ScrollReveal !!!!!!!!!
  `
  #home .image, #home .text,

  #about .image, #about .text .title, #about .text p,

  #services header .title, #services header p, #services .cards, #services .cards .card i, #services .cards .card h3, #services .cards .card p,

  #testimonials header, #testimonials .testimonials, #testimonials .swiper-pagination,

  #contact .text .title, #contact .text p, #contact .text a, #contact .links li,
  
  footer .brand .logo-alt, footer .brand p, footer .social i
  `,
  { interval: 100 }
)

// back-to-top button appears on the screen
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

  for (const section of sections) {
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
