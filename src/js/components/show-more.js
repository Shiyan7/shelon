document.addEventListener("DOMContentLoaded", () => {
  const showMoreWrappers = document.querySelectorAll(".show-more");

  function showMore (btn, content) {
    content.classList.add("active")
    btn.remove()
  }

  showMoreWrappers?.forEach(el => {
    const btn = el.querySelector(".show-more__btn");
    const content = el.querySelector(".show-more__content")

    btn?.addEventListener("click", () => showMore(btn, content))
  })
})