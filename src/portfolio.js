document
  .querySelector(".dropdown-history")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const content = document.querySelector(".dropdown-history-content");
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });

document
  .querySelector(".dropdown-skills")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const content = document.querySelector(".dropdown-skills-content");
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });

document
  .querySelector(".dropdown-experience")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const content = document.querySelector(".dropdown-experience-content");
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
