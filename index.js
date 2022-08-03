const menubtn = document.querySelector("#menu-btn");
const closebtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menubtn.addEventListener("click", ()=>{
    sidebar.style.display = "block"
})

closebtn.addEventListener("click", ()=>{
    sidebar.style.display = "none"
})