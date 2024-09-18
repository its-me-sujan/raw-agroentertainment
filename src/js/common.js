document
  .querySelector(".dropdown-toggle")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const menu = this.nextElementSibling;
    menu.classList.toggle("show");
    this.querySelector(".arrow").classList.toggle("rotate-270");
  });

document.addEventListener("click", function (e) {
  const toggle = document.querySelector(".dropdown-toggle");
  const menu = document.querySelector(".dropdown-menu");
  if (!toggle.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("show");
    toggle.querySelector(".arrow").classList.remove("rotate-270");
  }
});

function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  elements.forEach((el) => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then((response) => response.text())
      .then((data) => (el.innerHTML = data))
      .catch((error) => console.error("Error loading file:", error));
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);
