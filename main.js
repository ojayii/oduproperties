let menu = document.getElementById("menu")
let menuOn = document.getElementById("menuon")
let xBtn = document.getElementById("xbtn")

menuOn.addEventListener("click", function () {
    menu.style.display = "flex"
    xBtn.style.display = "flex"
    document.querySelector("body").style.position = "fixed"
    // let logo = document.getElementById("aLogo")
    // let bookBtn = document.getElementById("bookbutton")
    // let email = document.getElementById("email")
    // let submitBtn = document.getElementById("submit-btn")
    // let navlinks = document.getElementById("navlinks")
})

xBtn.addEventListener("click", function () {
    menu.style.display = "none"
    xBtn.style.display = "none"
    document.querySelector("body").style.position = ""
})