const viewPortWidth = window.innerWidth;
const cardShareBtn = document.querySelector(".card__share-btn");
const cardShareLinks = document.querySelector(".card__share-links");

function showShareLinks() {
  if (viewPortWidth < 768) {
    cardShareBtn.classList.add("slider-active");
    cardShareLinks.classList.add("slider-active");
  } else {
    cardShareLinks.classList.add("popover-active");
  }
}

function hideShareLinks() {
  if (viewPortWidth < 768) {
    cardShareBtn.classList.remove("slider-active");
    cardShareLinks.classList.remove("slider-active");
  } else {
    cardShareLinks.classList.remove("popover-active");
  }
}

const showShareLinksEvents = ["mouseover", "touchstart"];
showShareLinksEvents.forEach((event) => {
  cardShareBtn.addEventListener(event, (e) => {
    showShareLinks();
  });
});
const hideShareLinksEvents = ["mouseout", "touchend"];
hideShareLinksEvents.forEach((event) => {
  cardShareBtn.addEventListener(event, (e) => {
    hideShareLinks();
  });
});
