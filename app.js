const faqContainer = document.querySelectorAll(".label-container");
const loginBtn = document.querySelector(".first-btn");
let docWidth = document.documentElement.offsetWidth;

loginBtn.addEventListener("click", () => {
  location.href = "/login";
});

faqContainer.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    if (accordion.classList.contains("active")) {
      accordion.classList.remove("active");
    } else {
      //Select all labels with the active class
      const faqWithActive = document.querySelectorAll(".active");

      faqWithActive.forEach((accord) => {
        accord.classList.remove("active");
      });
      accordion.classList.add("active");
    }
  });
});

// navDescriptionLink.addEventListener("click", () => {
//   //   sectionDescription.scrollIntoView({ behavior: "smooth" });
// });

[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});
