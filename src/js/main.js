const section1 = document.querySelector('.profile')
const section2 = document.querySelector('.about')

window.onscroll = function () {
  if (window.pageYOffset >= section1.offsetTop + section1.offsetHeight) {
    section2.style.display = 'block'
  }
}
