import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("projects conectado");

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      return rect.top <= windowHeight && rect.right >= 100;
    }

    const projects = document.querySelectorAll('.projects');

    function handleAnimations() {
      projects.forEach(project => {
        if (isElementInViewport(project)) {
          project.classList.add('aos-animate');
        } else {
          project.classList.remove('aos-animate');
        }
      });
    }

    document.addEventListener('DOMContentLoaded', handleAnimations);
    window.addEventListener('scroll', handleAnimations);
  }
}
