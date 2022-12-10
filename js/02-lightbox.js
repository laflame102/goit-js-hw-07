import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryImgMarkup(galleryItems);

galleryRef.innerHTML = galleryMarkup;

function createGalleryImgMarkup(images) {
  return images.reduce((acc, { preview, original, description }) => {
        return acc + `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }, '')
}

const lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData:'alt'});
