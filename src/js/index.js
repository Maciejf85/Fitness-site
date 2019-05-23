const navList = [...document.querySelectorAll(".nav__list li a")];

const clearClass = () => {
  navList.forEach(item => item.classList.remove("active"));
};

navList.forEach(item => {
  item.addEventListener("click", e => {
    clearClass();
    e.target.classList.toggle("active");
  });
});
