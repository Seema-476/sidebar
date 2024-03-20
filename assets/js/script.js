// const menuicon = document.querySelector(".menuicon");
const sidebarbtn = document.querySelector(".opensidebar");
const sidebarpage = document.querySelector(".sidebarpage");
const cross = document.querySelector(".cross");
const bglayer = document.querySelector(".bglayer");

sidebarbtn.addEventListener("click", function () {
    sidebarpage.classList.toggle("show")
    bglayer.classList.add("d-block")
})
cross.addEventListener("click", function () {
    sidebarpage.classList.remove("show")
    bglayer.classList.remove("d-block")
})