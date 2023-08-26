
// document.addEventListener("DOMContentLoaded", () => {
//   const listItems = document.querySelectorAll("navbar#left ul li");

//   let selectedPartial = document.getElementById("about-page");

//   listItems.forEach((item) => {
//     item.addEventListener("click", (event) => {
//       event.preventDefault();

//       const clickedPartialId = item.classList[1];
//       const clickedPartial = document.getElementById(`${clickedPartialId}-page`);

//       selectedPartial.style.display = "none";
//       clickedPartial.style.display = "block";

//       selectedPartial = clickedPartial;

//       listItems.forEach((li) => {
//         li.classList.remove("active");
//       });

//       item.classList.add("active");

//       clickedPartial.scrollIntoView({ behavior: "smooth" });
//     });
//   });

//   const aboutLi = document.querySelector("navbar#left ul li.about");
//   aboutLi.classList.add("active");
// });

document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll("navbar#left ul li");
  const slider = document.querySelector(".slider"); // Seleciona o elemento do slider

  let selectedPartial = document.getElementById("about-page");

  listItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      const clickedPartialId = item.classList[1];
      const clickedPartial = document.getElementById(`${clickedPartialId}-page`);

      selectedPartial.style.display = "none";
      clickedPartial.style.display = "block";

      selectedPartial = clickedPartial;

      // Atualiza a posição do slider
      const itemIndex = Array.from(listItems).indexOf(item);
      const sliderPosition = itemIndex * (100 / listItems.length);
      slider.style.left = `${sliderPosition}%`;

      listItems.forEach((li) => {
        li.classList.remove("active");
      });

      item.classList.add("active");

      clickedPartial.scrollIntoView({ behavior: "smooth" });
    });
  });

  const aboutLi = document.querySelector("navbar#left ul li.about");
  aboutLi.classList.add("active");
});

