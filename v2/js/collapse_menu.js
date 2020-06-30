const menuBtnTop = document.querySelector("#menu_top");
const menuBtnCollapse = document.querySelector("#menu_collapse");
const collapseMenu = document.querySelector(".nav_collapse");
const scrollMenu = document.querySelector(".nav_top");

menuBtnTop.addEventListener("click", () => {
    collapseMenu.classList.add("opened");
    scrollMenu.style.top = "-100%";
});
menuBtnCollapse.addEventListener("click", () => {
    collapseMenu.classList.remove("opened");
    scrollMenu.style.top = "10px";
});