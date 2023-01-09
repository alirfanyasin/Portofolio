const btnBarsMenu = document.querySelector('.menu-bars-icon')
const btnXmarkMenu = document.querySelector('.menu-xmark-icon')
const navbarNav = document.querySelector('.navbar-nav')
btnBarsMenu.addEventListener('click', function() {
    navbarNav.classList.toggle('d-none')
    btnXmarkMenu.classList.toggle('d-none')
    btnBarsMenu.classList.toggle('d-none')
})
btnXmarkMenu.addEventListener('click', function() {
    navbarNav.classList.toggle('d-none')
    btnXmarkMenu.classList.toggle('d-none')
    btnBarsMenu.classList.toggle('d-none')
})

const homePage = document.querySelector('#home-page')
const linkHomePage = document.querySelector('.nav-link.home-page')

const aboutPage = document.querySelector('#about-page')
const linkAboutPage = document.querySelector('.nav-link.about-page')

const contactPage = document.querySelector('#contact-page')
const linkContactPage = document.querySelector('.nav-link.contact-page')

const skillPage = document.querySelector('#skill-page')
const linkSkillPage = document.querySelector('.nav-link.skill-page')

const portofolioPage = document.querySelector('#portofolio-page')
const linkPortofolioPage = document.querySelector('.nav-link.portofolio-page')



linkHomePage.addEventListener('click', function() {
    homePage.classList.remove('d-none')
    linkHomePage.classList.add('active')
    aboutPage.classList.add('d-none')
    linkAboutPage.classList.remove('active')
    contactPage.classList.add('d-none')
    linkContactPage.classList.remove('active')
    portofolioPage.classList.add('d-none')
    linkPortofolioPage.classList.remove('active')
    skillPage.classList.add('d-none')
    linkSkillPage.classList.remove('active')
})
linkAboutPage.addEventListener('click', function() {
    homePage.classList.add('d-none')
    linkHomePage.classList.remove('active')
    aboutPage.classList.remove('d-none')
    linkAboutPage.classList.add('active')
    contactPage.classList.add('d-none')
    linkContactPage.classList.remove('active')
    skillPage.classList.add('d-none')
    linkSkillPage.classList.remove('active')
    portofolioPage.classList.add('d-none')
    linkPortofolioPage.classList.remove('active')
})

linkContactPage.addEventListener('click', function() {
    homePage.classList.add('d-none')
    linkHomePage.classList.remove('active')
    aboutPage.classList.add('d-none')
    linkAboutPage.classList.remove('active')
    contactPage.classList.remove('d-none')
    linkContactPage.classList.add('active')
    skillPage.classList.add('d-none')
    linkSkillPage.classList.remove('active')
    portofolioPage.classList.add('d-none')
    linkPortofolioPage.classList.remove('active')
})

linkPortofolioPage.addEventListener('click', function() {
    homePage.classList.add('d-none')
    linkHomePage.classList.remove('active')
    aboutPage.classList.add('d-none')
    linkAboutPage.classList.remove('active')
    contactPage.classList.add('d-none')
    linkContactPage.classList.remove('active')
    skillPage.classList.add('d-none')
    linkSkillPage.classList.remove('active')
    portofolioPage.classList.remove('d-none')
    linkPortofolioPage.classList.add('active')
})

linkSkillPage.addEventListener('click', function() {
    homePage.classList.add('d-none')
    linkHomePage.classList.remove('active')
    aboutPage.classList.add('d-none')
    linkAboutPage.classList.remove('active')
    contactPage.classList.add('d-none')
    linkContactPage.classList.remove('active')
    skillPage.classList.remove('d-none')
    linkSkillPage.classList.add('active')
    portofolioPage.classList.add('d-none')
    linkPortofolioPage.classList.remove('active')
})