import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");

const markup = galleryItems.map(({preview, original, description}) =>
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");

galleryContainerEl.innerHTML = markup;

const onGalleryItemsClick = (evt) => {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }

    var lightbox = new SimpleLightbox('.gallery a', {

        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: '250ms'

    });

};

galleryContainerEl.addEventListener("click", onGalleryItemsClick);