
document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll("navbar#left ul li");

  let selectedPartial = document.getElementById("about-page");

  listItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      const clickedPartialId = item.classList[1];
      const clickedPartial = document.getElementById(`${clickedPartialId}-page`);

      selectedPartial.style.display = "none"; // Oculta a partial anterior
      clickedPartial.style.display = "block"; // Exibe a partial clicada

      selectedPartial = clickedPartial;

      listItems.forEach((li) => {
        li.classList.remove("active");
      });

      item.classList.add("active");

      // Role a página até a seção correspondente
      clickedPartial.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Adiciona a classe "active" à segunda <li> (li.about) quando a página for carregada
  const aboutLi = document.querySelector("navbar#left ul li.about");
  aboutLi.classList.add("active");
});
