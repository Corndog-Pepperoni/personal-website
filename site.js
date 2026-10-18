const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menu && nav) {
  menu.hidden = false;
  document.documentElement.classList.add("js");
  const closeMenu = () => {
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menu.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menu.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".header-inner")) closeMenu();
  });
  matchMedia("(min-width: 1000px)").addEventListener("change", closeMenu);
}
