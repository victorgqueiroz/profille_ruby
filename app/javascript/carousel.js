function initializeCarousel(selector, interval) {
  $(selector).carousel({
    interval: interval
  });
}

// Para usar a função e inicializar o carousel com o intervalo desejado:
initializeCarousel('.carousel', 500);
