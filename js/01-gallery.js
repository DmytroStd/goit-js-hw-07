import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function GalleryElem() {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    /></a>
  </div>
`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", GalleryElem());

function onImageClick(event) {

  event.preventDefault();

  const marking = `<img
      class="gallery__image";
      src="${event.target.dataset.source}";
      alt="${event.target.description}";
    />`;

  if (event.target.nodeName !== "IMG") {
    return;
    }
    
  const instance = basicLightbox.create(marking, {
    onShow: () => addEventListener("keydown", closeOnKeyUp),
    onClose: () => removeEventListener("keydown", closeOnKeyUp),
  });

  instance.show();

  function closeOnKeyUp(event) {
  console.log(event.key);
  if (event.code === "Escape") instance.close();
    }
}

gallery.addEventListener("click", onImageClick);