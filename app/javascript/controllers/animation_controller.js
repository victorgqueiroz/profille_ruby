import { Controller } from "@hotwired/stimulus"
import AOS from "aos";

export default class extends Controller {
  connect() {
    AOS.init(); // Inicialize o AOS.js

    console.log("animation conectado");

    const opaque = "cardAnimate1";
    const colegio = "cardAnimate2";
    const band = "cardAnimate3";

    const cards = [opaque, colegio, band];

    // Oculta os cards e remove animações
    function hideCards() {
      cards.forEach(cardId => {
        const card = document.getElementById(cardId);
        if (card) {
          card.style.display = "none";
          AOS.refresh();
        }
      });
    }

    // Mostra o card e adiciona a animação
    function showCard(cardId) {
      const card = document.getElementById(cardId);
      if (card) {
        card.style.display = "block";
        AOS.refresh();
      }
    }

    hideCards(); // Oculta todos os cards
    showCard(opaque); // Mostra o card "opaque" ao carregar a página
  }
}
