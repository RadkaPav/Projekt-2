const icon = document.querySelector(".fa-solid")
const navbar = document.querySelector("nav")


icon.addEventListener("click", function() {
    navbar.classList.toggle("show-links")
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark")
    } else {
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")
    }
})