const  side_bar = document.querySelector(".side-bar")
const clear_btn = document.querySelector(".clear-side")
const btn = document.querySelector(".btn-click")
btn.addEventListener("click", () => {
    side_bar.style.display = "block";
})
clear_btn.addEventListener("click", () => {
    side_bar.style.display = "none";
})