const topButton = document.querySelector(".top-button");
let h = window.innerHeight;

const position = window.addEventListener("scroll", () => {
  h = window.innerHeight;
  window.pageYOffset > h
    ? (topButton.style.display = "block")
    : (topButton.style.display = "none");
});

const scrollToTop = () => {
  const c = document.documentElement.scrollTop;
  if (c > 0) {
    let value = 16;
    c > 30 ? (value = 16) : (value = 32);
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / value);
  }
};

topButton.addEventListener("click", () => {
  scrollToTop();
});
