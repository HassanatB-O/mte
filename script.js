let hamburgerMenu = document.querySelector(".hamburger")

hamburgerMenu.addEventListener("click", () =>{
    document.querySelector(".nav--menu--mobile").style.display = "block"
})

let closeMenu = document.querySelector(".close--menu--icon")

closeMenu.addEventListener("click", ()=>{
    document.querySelector(".nav--menu--mobile").style.display = "none"
})