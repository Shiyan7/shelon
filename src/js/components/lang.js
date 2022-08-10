document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.querySelector('.lang__btn');
  const langDropdown = document.querySelector('.lang-dropdown');
  const dropdownBtns = document.querySelectorAll('.lang-dropdown__btn')

  function handleChangeLang (e) {
    const target = e.target.textContent
    const btn = langBtn.querySelector('span')

    btn.innerText = target
  }

  dropdownBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      dropdownBtns.forEach(el => el.classList.remove('active'))
      e.currentTarget.classList.toggle('active')
      langDropdown.classList.remove('active')
      langBtn.classList.remove('active')
      handleChangeLang(e)
    })
  })

  document.addEventListener('click', e => {
    if(e.target.closest(".lang__btn")) {
      langBtn.classList.toggle('active')
      langDropdown.classList.toggle('active')
    } else {
      langBtn.classList.remove('active')
      langDropdown.classList.remove('active')
    }
  })
})

