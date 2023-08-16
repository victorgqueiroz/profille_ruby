function changeSection(sectionId) {
  // Código para trocar de seção

  // Reativar as animações AOS na seção de carreira
  var careerSections = document.getElementById("career-sections");
  if (careerSections) {
    careerSections.querySelectorAll("[data-aos]").forEach(element => {
      element.setAttribute("data-aos", element.getAttribute("data-aos"));
    });
  }
}
