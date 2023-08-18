import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("formation conectado vers2");

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      return rect.top <= windowHeight && rect.right >= 100;
    }

    const formations = document.querySelectorAll('.formation-page');

    function handleAnimations() {
      formations.forEach(formation => {
        if (isElementInViewport(formation)) {
          formation.classList.add('aos-animate');
        } else {
          formation.classList.remove('aos-animate');
        }
      });
    }

    document.addEventListener('DOMContentLoaded', handleAnimations);
    window.addEventListener('scroll', handleAnimations);
  }
}
