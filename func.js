const wrapper = document.querySelector(".wrapper")
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')
const btnPopup = document.querySelector('.btn-login')
const iconClose = document.querySelector('.icon-close')
const overlay = document.querySelector(".overlay")
const status = document.querySelector(".status")


registerLink.addEventListener("click", () => {
  wrapper.classList.add('active')
})

loginLink.addEventListener("click", () => {
  wrapper.classList.remove('active')
})

btnPopup.addEventListener("click", () => {
  wrapper.classList.add('active-popup'),
  overlay.classList.add('active')
})

iconClose.addEventListener("click", () => {
  wrapper.classList.remove('active-popup'),
  overlay.classList.remove('active')
})

window.addEventListener("scroll", function(){
  var header = document.querySelector('#header')
  if (window.scrollY > 0) {
      header.classList.add('rolagem')
  } else {
    header.classList.remove('rolagem')
  }
})