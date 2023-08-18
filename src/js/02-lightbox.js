import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const container = document.querySelector(`.gallery`);
function createMurkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} />
   </a>
</li>
    `
    )
    .join(``);
}

container.insertAdjacentHTML("beforeend", createMurkup(galleryItems));

// console.log(SimpleLightBox);

// let gallery = new SimpleLightbox(".gallery a");
// let lightbox = $(".gallery a").simpleLightbox;
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
