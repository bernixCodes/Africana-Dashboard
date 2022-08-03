const menubtn = document.querySelector("#menu-btn");
const closebtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");
const themeToggler = document.querySelector(".theme-toggler");


menubtn.addEventListener("click", ()=>{
    sidebar.style.display = "block"
})

closebtn.addEventListener("click", ()=>{
    sidebar.style.display = "none"
})

themeToggler.addEventListener("click", ()=>{
    document.body.classList.toggle('dark-theme-variables')
})