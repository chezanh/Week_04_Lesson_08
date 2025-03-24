document
  .querySelector(".dropdown-history")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const content = document.querySelector(".dropdown-history-content");
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
