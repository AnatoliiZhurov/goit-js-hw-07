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
            <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
            />
        </a>
    </li>
    `
    )
    .join(``);
}

container.insertAdjacentHTML("beforeend", createMurkup(galleryItems));

// {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
//     description: "Aerial Beach View",
//   },

let lightboxInstance = null;

container.addEventListener(`click`, handlerImgClick);

function handlerImgClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const { source } = evt.target.dataset;
  console.log(evt.target.dataset);

  const card = galleryItems.find(({ original }) => original === source);

  lightboxInstance = basicLightbox.create(`
    <div class="modal"><img src=${card.original} alt=${card.description} width="800"></div>
  `);

  lightboxInstance.show();

  lightboxInstance.element().addEventListener("click", closeLightbox);
}

function closeLightbox() {
  if (lightboxInstance.visible()) {
    lightboxInstance.close();
  }
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape" && lightboxInstance.visible()) {
    lightboxInstance.close();
  }
});
