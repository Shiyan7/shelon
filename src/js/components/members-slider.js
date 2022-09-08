document.addEventListener('DOMContentLoaded', () => {
  const membersItems = document.querySelectorAll('.members-item__title');
  const membersSlides = document.querySelectorAll('.members-slide')

  membersItems?.forEach(el => {
    const parent = el.closest('.members-item')
    const id = parent?.dataset.slidePath;

    el.addEventListener('click', () => {

      const target = document.querySelector(`.members-slide[data-slide-target='${id}']`)

      membersSlides?.forEach(slide => {
        membersItems.forEach(el => el.closest('.members-item').classList.remove('active'))
        setTimeout(() => {
          slide?.classList.remove('active')
          target?.classList.add('active')
        }, 400)
        parent?.classList.add('active')
      })
    })
  })
})