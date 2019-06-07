const topButton = document.querySelector(".top-button");
const menuButton = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
let h = window.innerHeight;

menuButton.addEventListener("click", function() {
  navList.classList.toggle("mobile_menu");
});
const position = window.addEventListener("scroll", () => {
  h = window.innerHeight;
  if (window.pageYOffset > h) {
    topButton.style.display = "block";
    topButton.classList.add("show");
    topButton.classList.remove("hide");
  } else {
    topButton.classList.remove("show");
    topButton.classList.add("hide");
  }
  // ? (topButton.style.display = "block")
  // : (topButton.style.display = "none");
});

const scrollToTop = () => {
  const c = document.documentElement.scrollTop;
  if (c > 0) {
    let value = 16;
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / value);
  }
};

topButton.addEventListener("click", () => {
  scrollToTop();
});
