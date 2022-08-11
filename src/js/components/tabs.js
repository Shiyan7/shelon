import {Tabs} from '../vendor/tabs'

document.addEventListener("DOMContentLoaded", () => {

  const tabs = document.querySelector(".tabs")

  if(tabs) {
    new Tabs('tab');
  }
})