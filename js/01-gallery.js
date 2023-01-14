import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");

const markup = galleryItems.map(({preview, original, description}) =>
`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join("");

galleryContainerEl.innerHTML = markup;

const onGalleryItemsClick = (evt) => {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">` 
    );

    instance.show();

    const escCloseOption = (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    };

    galleryContainerEl.addEventListener("keydown", escCloseOption);

};

galleryContainerEl.addEventListener("click", onGalleryItemsClick);


