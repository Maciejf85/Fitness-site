// Gallery items
const pictures = [
  "abs.jpg",
  "aerobics.jpg",
  "yoga4.jpg",
  "yoga.jpg",
  "yoga2.jpg",
  "yoga3.jpg"
];
// Variables
const topButton = document.querySelector(".top-button");
const menuButton = document.querySelector(".hamburger");
const modalWindow = document.querySelector(".modal");
let currentImg = 0;

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

// show/exit modal , removeGallery

const modalExit = e => {
  if (e.target.classList[0] === "modal") {
    const modalExist = document.querySelector(".gallery__item");
    modalExist ? modalExist.parentElement.removeChild(modalExist) : false;
    openCloseModal(e);
  }
};

// changePicture
const changePicture = e => {
  const direction = e.target.dataset.dir;
  const galleryLength = pictures.length - 1;
  const image = document.querySelector(".gallery__item > img");

  // prev picture
  if (direction === "left") {
    currentImg !== 0 ? currentImg-- : (currentImg = galleryLength);
  }

  // next picture
  if (direction === "right") {
    currentImg !== galleryLength ? currentImg++ : (currentImg = 0);
  }

  image.setAttribute("src", `./src/img/${pictures[currentImg]}`);
};
// add/remove Modal
const openCloseModal = e => {
  modalWindow.classList.toggle("display");
  modalWindow.classList.toggle("modalActive");
};
// show modal with form
const showHideModal = e => {
  openCloseModal(e);
  const name = document.querySelector('input[type="text"]');
  const phone = document.querySelector('input[type="tel"]');
  name.value = null;
  phone.value = null;
  formResponse.innerHTML = null;
};

//  showGallery function + gallery logic
const showGallery = e => {
  const picNumber = e.target.dataset.number;
  currentImg = parseInt(picNumber);

  //  create elements
  const modal = document.createElement("div");
  const leftArrow = document.createElement("div");
  const rightArrow = document.createElement("div");
  const image = document.createElement("img");
  const leftIcon = document.createElement("i");
  const rightIcon = document.createElement("i");

  //  add class
  modal.classList.add("gallery__item");
  leftArrow.classList.add("leftArrow");
  rightArrow.classList.add("rightArrow");
  leftIcon.classList.add("icon-left-big");
  rightIcon.classList.add("icon-right-big");

  // image url
  image.setAttribute("src", `./src/img/${pictures[picNumber]}`);
  image.setAttribute("alt", "picture");

  // arrow attributes
  leftArrow.dataset.dir = "left";
  leftIcon.dataset.dir = "left";
  rightArrow.dataset.dir = "right";
  rightIcon.dataset.dir = "right";

  // add to DOM
  leftArrow.appendChild(leftIcon);
  rightArrow.appendChild(rightIcon);
  modal.appendChild(leftArrow);
  modal.appendChild(rightArrow);
  modal.appendChild(image);
  modalWindow.appendChild(modal);

  leftArrow.addEventListener("click", changePicture);
  rightArrow.addEventListener("click", changePicture);
  openCloseModal(e);
};

modalWindow.addEventListener("click", modalExit);
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
