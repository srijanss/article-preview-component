const viewPortWidth = window.innerWidth;
const cardShareBtn = document.querySelector(".card__share-btn");
const cardShareLinks = document.querySelector(".card__share-links");
let popoverActive = false;

function showShareLinks() {
  popoverActive = true;
  if (viewPortWidth < 1024) {
    cardShareLinks.classList.add("slider-active");
    cardShareBtn.classList.add("slider-active");
  } else {
    cardShareLinks.classList.add("popover-show");
    cardShareBtn.classList.add("popover-show");
  }
}

function hideShareLinks() {
  popoverActive = false;
  if (viewPortWidth < 1024) {
    cardShareLinks.classList.remove("slider-active");
    cardShareBtn.classList.remove("slider-active");
  } else {
    cardShareLinks.classList.remove("popover-show");
    cardShareBtn.classList.remove("popover-show");
  }
}

const toggleShareLinksEvents = ["click", "touchstart", "keydown"];
toggleShareLinksEvents.forEach((event) => {
  cardShareBtn.addEventListener(event, (e) => {
    if (e.type === "keydown" && (e.key !== "Enter" || e.key !== " ")) {
      return;
    } else {
      e.preventDefault();
    }
    !popoverActive ? showShareLinks() : hideShareLinks();
  });
});
