let modalBtn = document.getElementById("menu-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.getElementById("menu-btn")
let bar = document.getElementById("bar_element")

// Navigation

const toggleNav = () => {
  modalBtn.onclick = () => {
    if (modal.classList.contains("hidden")) {
      modal.classList.replace('hidden', 'active');
      if (modal.classList.contains('animate-inactive')) {
        modal.classList.remove('animate-inactive')
      }
      modal.classList.add('animate-active')
    }
    else {
      modal.classList.replace('active', 'hidden');
      modal.classList.remove('animate-active')
      modal.classList.add('animate-inactive')
    }
    modalBtn.classList.toggle('menu-btn--active');
  }
}
window.onclick = (e) => {
  if(e.target == modal){
    modal.style.display = "none"
  }
}
// Call functions
toggleNav();