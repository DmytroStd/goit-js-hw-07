import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

function renderGalleryElem() {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
    )
    .join("");
}
gallery.insertAdjacentHTML("beforeend", renderGalleryElem());

let lightbox1111 = new SimpleLightbox(".gallery a", {
   captionsData: "alt",
   captionDelay: 250,
   captionPosition: 'bottom',
});




