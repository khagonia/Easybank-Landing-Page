///////////////////////
// mobile nav toggle
///////////////////////

const btn = document.querySelector(".btn-mobile")
const header = document.querySelector(".header")
const nav = document.querySelector(".main-nav")

//menu button click to open/close nav
btn.addEventListener('click', () => {
  header.classList.toggle('nav-open')
})

//close nav when clicked outside 
document.addEventListener('click', (e) => {
  //return true when clicked inside
  const isinside = e.target.closest(".main-nav")?true:false

  //return true when menu button is clicked
  const isbtn = e.target.closest('.btn-mobile')?true:false

  if(!isinside && !isbtn && header.classList.contains('nav-open')) {
    header.classList.remove('nav-open')
  }
})



