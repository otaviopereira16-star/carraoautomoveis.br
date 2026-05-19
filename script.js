const carCards = document.querySelectorAll(".car-card");
const modal = document.querySelector("#carousel-modal");
const modalTitle = document.querySelector("#carousel-title");
const modalImage = document.querySelector("#carousel-image");
const modalCarName = document.querySelector("#carousel-car-name");
const modalCarDetails = document.querySelector("#carousel-car-details");
const modalCarPrice = document.querySelector("#carousel-car-price");
const closeButton = document.querySelector(".carousel-close");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const searchIcon = document.querySelector("#search-icon");
const searchInput = document.querySelector("#search-input");
const catalogSection = document.querySelector("#catalogo");
const loader = document.querySelector("#loader");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

let currentImages = [];
let currentIndex = 0;
const cardHoverIntervals = new WeakMap();

const carPhotos = {
  "Toyota Corolla XEI 2024": [
    "img/corolla.xei7.jpeg",
    "img/corolla.xei.jpeg",
    "img/corolla.xei2.jpeg",
    "img/corolla.xei3.jpeg",
    "img/corolla.xei4.jpeg",
    "img/corolla.xei5.jpeg",
    "img/corolla.xei6.jpeg",
    "img/corolla.xei8.jpeg",
    "img/corolla.xei9.jpeg",
  ],
  "Chevrolet Corsa Maxx 1.4": [
    "img/corsa.jpeg",
    "img/corsa2.jpeg",
    "img/corsa3.jpeg",
    "img/corsa4.jpeg",
    "img/corsa5.jpeg",
    "img/corsa6.jpeg",
    "img/corsa7.jpeg",
    "img/corsa8.jpeg",
    "img/corsa9.jpeg",
    "img/corsa10.jpeg",
  ],
  "Chevrolet Cruze LTZ": [
    "img/cruze.jpeg",
    "img/cruze2.jpeg",
    "img/cruze3.jpeg",
    "img/cruze4.jpeg",
    "img/cruze5.jpeg",
    "img/cruze6.jpeg",
    "img/cruze7.jpeg",
    "img/cruze8.jpeg",
    "img/cruze9.jpeg",
  ],
  "Chevrolet Prisma LTZ": [
    "img/prisma.jpeg",
    "img/prisma2.jpeg",
    "img/prisma3.jpeg",
    "img/prisma4.jpeg",
    "img/prisma5.jpeg",
    "img/prisma6.jpeg",
    "img/prisma7.jpeg",
    "img/prisma8.jpeg",
    "img/prisma9.jpeg",
    "img/prisma10.jpeg",
  ],
  "Chevrolet Onix LTZ": [
    "img/onix.jpeg",
    "img/onix2.jpeg",
    "img/onix3.jpeg",
    "img/onix4.jpeg",
    "img/onix5.jpeg",
    "img/onix6.jpeg",
    "img/onix7.jpeg",
    "img/onix8.jpeg",
    "img/onix9.jpeg",
    "img/onix10.jpeg",
  ],
  "Fiat Strada Working": [
    "img/STRADA.jpeg",
    "img/STRADA2.jpeg",
    "img/STRADA3.jpeg",
    "img/STRADA4.jpeg",
    "img/STRADA5.jpeg",
    "img/STRADA6.jpeg",
    "img/STRADA7.jpeg",
    "img/STRADA8.jpeg",
    "img/STRADA9.jpeg",
    "img/STRADA10.jpeg",
  ],
  "Honda Biz 125 ES": [
    "img/BIZ.jpeg",
    "img/BIZ2.jpeg",
    "img/BIZ3.jpeg",
    "img/BIZ4.jpeg",
    "img/BIZ5.jpeg",
    "img/BIZ6.jpeg",
    "img/BIZ7.jpeg",
    "img/BIZ8.jpeg",
    "img/BIZ9.jpeg",
  ],
  "Sea Doo GTI 170 SE": [
    "img/JETSKI.jpeg",
    "img/JETSKI2.jpeg",
    "img/JETSKI3.jpeg",
    "img/JETSKI4.jpeg",
    "img/JETSKI5.jpeg",
    "img/JETSKI6.jpeg",
    "img/JETSKI7.jpeg",
    "img/JETSKI8.jpeg",
    "img/JETSKI9.jpeg",
    "img/JETSKI10.jpeg",
  ],
  "Hyundai HB20 Comfort": [
    "img/Design sem nome (20).png",
    "img/Design sem nome (28).png",
    "img/Design sem nome (23).png",
    "img/Design sem nome (27).png",
    "img/Design sem nome (29).png",
    "img/Design sem nome (18).png",
    "img/Design sem nome (21).png",
    "img/Design sem nome (24).png",
    "img/logo.jpeg",
  ],
  "Chevrolet Onix Premier": [
    "img/Design sem nome (29).png",
    "img/Design sem nome (23).png",
    "img/Design sem nome (27).png",
    "img/Design sem nome (20).png",
    "img/Design sem nome (28).png",
    "img/Design sem nome (18).png",
    "img/Design sem nome (21).png",
    "img/Design sem nome (24).png",
    "img/logo.jpeg",
  ],
  "Volkswagen T-Cross Highline": [
    "img/logo.jpeg",
    "img/Design sem nome (28).png",
    "img/Design sem nome (23).png",
    "img/Design sem nome (20).png",
    "img/Design sem nome (27).png",
    "img/Design sem nome (29).png",
    "img/Design sem nome (18).png",
    "img/Design sem nome (21).png",
    "img/Design sem nome (24).png",
  ],
  "Fiat Argo Drive": [
    "img/Design sem nome (20).png",
    "img/Design sem nome (18).png",
    "img/Design sem nome (28).png",
    "img/Design sem nome (23).png",
    "img/Design sem nome (27).png",
    "img/Design sem nome (29).png",
    "img/Design sem nome (21).png",
    "img/Design sem nome (24).png",
    "img/logo.jpeg",
  ],
  "Toyota Hilux SRV": [
    "img/Design sem nome (18).png",
    "img/Design sem nome (27).png",
    "img/Design sem nome (29).png",
    "img/Design sem nome (20).png",
    "img/Design sem nome (23).png",
    "img/Design sem nome (28).png",
    "img/Design sem nome (21).png",
    "img/Design sem nome (24).png",
    "img/logo.jpeg",
  ],
  "Nissan Kicks SL": [
    "img/Design sem nome (23).png",
    "img/Design sem nome (28).png",
    "img/Design sem nome (29).png",
    "img/Design sem nome (20).png",
    "img/Design sem nome (27).png",
    "img/Design sem nome (18).png",
    "img/Design sem nome (21).png",
    "img/Design sem nome (24).png",
    "img/logo.jpeg",
  ],
  "Renault Duster Iconic": [
    "img/Design sem nome (23).png",
    "img/Design sem nome (20).png",
    "img/Design sem nome (27).png",
    "img/Design sem nome (28).png",
    "img/Design sem nome (29).png",
    "img/Design sem nome (18).png",
    "img/Design sem nome (21).png",
    "img/Design sem nome (24).png",
    "img/logo.jpeg",
  ],
};

function getCardImages(card) {
  return carPhotos[card.dataset.title] || [card.querySelector("img").getAttribute("src")];
}

function showImage() {
  modalImage.src = currentImages[currentIndex];
}

function openCarousel(card) {
  currentImages = getCardImages(card);
  currentIndex = 0;

  modalTitle.textContent = card.dataset.title;
  modalCarName.textContent = card.querySelector("h3").textContent;
  modalCarDetails.textContent = card.querySelector(".car-description").textContent;
  modalCarPrice.textContent = card.querySelector(".prince").textContent;
  modal.style.setProperty("--carousel-bg", `url("${currentImages[0]}")`);
  showImage();
  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeCarousel() {
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
}

carCards.forEach((card) => {
  const cardImage = card.querySelector("img");
  const cardImages = getCardImages(card);
  const originalImage = cardImage.getAttribute("src");
  const slider = document.createElement("div");
  const nextImage = cardImage.cloneNode();
  let hoverIndex = 0;
  let slideTimeout;
  let isSliding = false;

  slider.classList.add("card-image-slider");
  cardImage.classList.add("card-image-current");
  nextImage.classList.add("card-image-next");
  cardImage.parentNode.insertBefore(slider, cardImage);
  slider.append(cardImage, nextImage);

  function slideCardImage() {
    if (isSliding) {
      return;
    }

    isSliding = true;
    hoverIndex = hoverIndex === cardImages.length - 1 ? 0 : hoverIndex + 1;
    nextImage.src = cardImages[hoverIndex];
    slider.classList.add("slide-active");

    slideTimeout = setTimeout(() => {
      slider.classList.add("is-resetting");
      cardImage.src = nextImage.src;
      slider.classList.remove("slide-active");
      slider.offsetHeight;
      slider.classList.remove("is-resetting");
      isSliding = false;
    }, 650);
  }

  card.addEventListener("click", () => {
    openCarousel(card);
  });

  card.addEventListener("mouseenter", () => {
    if (cardImages.length <= 1 || cardHoverIntervals.has(card)) {
      return;
    }

    hoverIndex = 0;

    const interval = setInterval(slideCardImage, 2000);

    cardHoverIntervals.set(card, interval);
  });

  card.addEventListener("mouseleave", () => {
    const interval = cardHoverIntervals.get(card);

    if (interval) {
      clearInterval(interval);
      cardHoverIntervals.delete(card);
    }

    clearTimeout(slideTimeout);
    slider.classList.remove("slide-active");
    isSliding = false;
    hoverIndex = 0;
    cardImage.src = originalImage;
    nextImage.src = originalImage;
  });

  const contactButton = card.querySelector(".btn");

  contactButton.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1;
  showImage();
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex === currentImages.length - 1 ? 0 : currentIndex + 1;
  showImage();
});

closeButton.addEventListener("click", closeCarousel);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeCarousel();
  }
});

searchIcon.addEventListener("click", () => {
  navbar.classList.remove("active");
  searchInput.classList.add("active");
  searchInput.focus();
  catalogSection.scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase().trim();

  carCards.forEach((card) => {
    const carName = card.querySelector("h3").textContent.toLowerCase();
    const carTitle = card.dataset.title.toLowerCase();
    const foundCar = carName.includes(searchText) || carTitle.includes(searchText);

    card.classList.toggle("hide", !foundCar);
  });
});

searchInput.addEventListener("blur", () => {
  if (searchInput.value.trim() === "") {
    searchInput.classList.remove("active");
  }
});

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide");
  }, 1000);
});

menuIcon.addEventListener("click", () => {
  searchInput.classList.remove("active");
  navbar.classList.toggle("active");
});

navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

document.addEventListener("click", (event) => {
  const clickedMenu = navbar.contains(event.target) || menuIcon.contains(event.target);
  const clickedSearch = searchInput.contains(event.target) || searchIcon.contains(event.target);

  if (!clickedMenu) {
    navbar.classList.remove("active");
  }

  if (!clickedSearch && searchInput.value.trim() === "") {
    searchInput.classList.remove("active");
  }
});
