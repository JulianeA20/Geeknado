const openModalBtn = document.querySelector(".open-modal")
const closeModalBtn = document.querySelector(".close-modal")

function openModal(fadeClass, modalClass) {
  const fade = document.querySelector(fadeClass);
  const modal = document.querySelector(modalClass);

  fade.style.display = 'block';
  modal.style.display = 'block';
}

function closeModal(fadeClass, modalClass) {
  const fade = document.querySelector(fadeClass);
  const modal = document.querySelector(modalClass);

  fade.style.display = 'none';
  modal.style.display = 'none';
}

openModalBtn.addEventListener("click", function() {
  openModal('.fade', '.modal')
})

closeModalBtn.addEventListener("click", function() {
  closeModal('.fade', '.modal')
})

window.addEventListener("scroll", function(){
    var header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})
