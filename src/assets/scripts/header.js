// test
console.log('header.js подключен')

const header = document.querySelector('header.header')

window.onscroll = () => {
  let y = window.scrollY

  if (y > 0) {
    header.classList.add('header_shadow')
  } else {
    header.classList.remove('header_shadow')
  }
}

