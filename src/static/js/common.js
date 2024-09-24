document
  .querySelector(".dropdown-toggle")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const menu = this.nextElementSibling;
    menu.classList.toggle("show");
    this.querySelector(".arrow").classList.toggle("rotate-180");
  });

document.addEventListener("click", function (e) {
  const toggle = document.querySelector(".dropdown-toggle");
  const menu = document.querySelector(".dropdown-menu");
  if (!toggle.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("show");
    toggle.querySelector(".arrow").classList.remove("rotate-180");
  }
});
document
  .querySelector(".mob-dropdown-toggle")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const menu = this.nextElementSibling;
    menu.classList.toggle("show");
    this.querySelector(".arrow").classList.toggle("rotate-180");
  });

document.addEventListener("click", function (e) {
  const toggle = document.querySelector(".mob-dropdown-toggle");
  const menu = document.querySelector(".mob-dropdown-menu");
  if (!toggle.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("show");
    toggle.querySelector(".arrow").classList.remove("rotate-180");
  }
});

function toggleSidebar(hamburgerId, sidebarId, iconId) {
  const hamburger = document.getElementById(hamburgerId);
  const sidebar = document.getElementById(sidebarId);
  const hamburgerIcon = document.getElementById(iconId);

  hamburger.addEventListener("click", () => {
    // Toggle sidebar visibility
    sidebar.classList.toggle("-translate-x-full");

    // Toggle hamburger icon between "fa-bars" and "fa-times"
    if (sidebar.classList.contains("-translate-x-full")) {
      hamburgerIcon.classList.remove("fa-times");
      hamburgerIcon.classList.add("fa-bars");
    } else {
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-times");
    }
  });
}
