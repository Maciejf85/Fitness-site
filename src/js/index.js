const topButton = document.querySelector(".top-button");
const menuButton = document.querySelector(".hamburger");
const modalWindow = document.querySelector(".modal");

const navList = document.querySelector(".nav__list");

//  images
const images = document.querySelectorAll(".item > img");

//  form vars
const submitButton = document.getElementById("submit");
const formResponse = document.querySelector(".response");

// modal window
const buttons = document.querySelectorAll(".priceList  button");
const joinButton = document.querySelector(".joinUs button");
const closeButton = document.querySelector(".closeButton");

// close modal
const showHideModal = e => {
  modalWindow.classList.toggle("display");
  modalWindow.classList.toggle("modalActive");
  const name = document.querySelector('input[type="text"]');
  const phone = document.querySelector('input[type="tel"]');
  name.value = null;
  phone.value = null;
  formResponse.innerHTML = null;
};
//  showGallery function
const showGallery = e => {
  const pictures = [
    "abs.jpg",
    "aerobics.jpg",
    "yoga4.jpg",
    "yoga.jpg",
    "yoga2.jpg",
    "yoga3.jpg"
  ];
};

// Join us click event
if (buttons.length !== 0) {
  buttons.forEach(item => item.addEventListener("click", showHideModal));
}
// Submit button event
if (submitButton) {
  submitButton.addEventListener("click", e => {
    e.preventDefault();
    const name = document.querySelector('input[type="text"]');
    const phone = document.querySelector('input[type="tel"]');

    if (name.value.length !== 0 && phone.value.length !== 0) {
      formResponse.style.color = "hsl(356, 52%, 100%)";
      formResponse.innerHTML = "Request sended ";
      setTimeout(() => showHideModal(), 1100);
    } else {
      formResponse.style.color = "hsl(356, 52%, 44%)";
      formResponse.innerHTML = "Fill in the form";
    }
  });
}
// close modal button
if (closeButton) {
  closeButton.addEventListener("click", showHideModal);
}
// join button
if (joinButton) {
  joinButton.addEventListener("click", showHideModal);
}
//  gallery modal
if (images.length !== 0) {
  images.forEach(item => item.addEventListener("click", showGallery));
}
// Top button
let h = window.innerHeight;

menuButton.addEventListener("click", function() {
  navList.classList.toggle("mobile_menu");
  const elements = this.querySelectorAll("div");
  navList.classList.length > 1
    ? elements.forEach(item => {
        item.classList.toggle("change");
      })
    : elements.forEach(item => {
        item.classList.toggle("change");
      });
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
