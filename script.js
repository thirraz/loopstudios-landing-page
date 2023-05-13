const hamburgerMenu = document.querySelector(".header__menu")
const mobileMenu = document.querySelector(".mobile__menu")
const closeMobileMenu = document.querySelector(".mobile__menu__close")

const links = document.querySelectorAll(".header__nav__link")

hamburgerMenu.addEventListener("click", () => {
	mobileMenu.style.transform = "translateX(0%)"

	console.log("ola")
})

closeMobileMenu.addEventListener("click", () => {
	mobileMenu.style.transform = "translateX(-100%)"
})
