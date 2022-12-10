import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const markup = createGalleryItemMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', markup)

galleryRef.addEventListener('click', onImgClick);

function createGalleryItemMarkup(items) {
    return items.reduce((acc,{ preview, original, description }) => {
        return acc + `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    },'')
}

function onImgClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`, {
    onShow: (instance) => {
    document.addEventListener('keydown', onEscapeClick);
    },
    onClose: (instance) => {
      document.removeEventListener('keydown', onEscapeClick);
  }
})
  instance.show()
  
  function onEscapeClick(evt){
    if (evt.code !== 'Escape') {
      return;
    }
    instance.close();
  };

}
