const burgerBtn = document.getElementById("js-burger");
const sidebar = document.getElementById("js-sidebar");

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target === burgerBtn || sidebar.contains(target)) {
    return;
  }
  burgerBtn.classList.remove("burger--open");
  sidebar.classList.remove("sidebar__wrapper--show");
});

burgerBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  burgerBtn.classList.toggle("burger--open");
  sidebar.classList.toggle("sidebar__wrapper--show");
});
